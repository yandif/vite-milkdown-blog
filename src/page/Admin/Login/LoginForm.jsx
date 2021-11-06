import LogoImg from '@/assets/img/logo.png';
import { TOKEN } from '@/constants';
import { Account } from '@/services';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const LoginForm = ({ prefix, setUser, history }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { username, password } = await form.validateFields();

      const account = await Account.Login({ username, password });

      if (!account || account.code !== 0 || !account.data) {
        // 登录失败
        return account;
      }

      localStorage.setItem(TOKEN, window.atob(account.data.token));

      const creatInt = setInterval(() => {
        setUser(account.data);
        clearInterval(creatInt);
      }, 1);
    } catch (e) {
      //
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${prefix}-form ${show && 'show'}`}>
      <Form form={form}>
        <div className="title">
          <img src={LogoImg} alt="logo" />
          <span>React-Admin</span>
        </div>
        <Form.Item
          name="username"
          rules={[
            { max: 12, message: '最大长度为12位字符' },
            {
              required: true,
              whitespace: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            size="large"
            id="username" // 为了获取焦点
            placeholder="admin/user"
            onPressEnter={handleSubmit}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { max: 18, message: '最大长度18个字符' },
          ]}
        >
          <Input
            prefix={<KeyOutlined style={{ fontSize: 13 }} />}
            size="large"
            type="password"
            placeholder="123456/123456"
            onPressEnter={handleSubmit}
          />
        </Form.Item>
        <div style={{ lineHeight: '40px' }}>
          <Checkbox
            className="remember"
            // checked={rememberPassword}
            // onChange={onRemember}
          >
            记住密码
          </Checkbox>
          <Button
            className="submit"
            size="large"
            type="primary"
            loading={loading}
            onClick={handleSubmit}
          >
            {loading ? '请稍后' : '登录'}
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
