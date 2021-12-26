import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

import LogoImg from '@/assets/img/logo.png';
import { message as Message } from '@/components/Message';
import { LOGININFO, TOKEN } from '@/constants';
import { Account } from '@/services';
import { tool } from '@/utils/tool';

const LoginForm = ({ prefix, setCurrentUser }: any) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const [form] = Form.useForm();

  // 1. 加载动画，检查是否有记住的密码
  useEffect(() => {
    setShow(true);
    PassWord.check();
  }, [form]);

  const PassWord = {
    check: () => {
      const loginInfo = localStorage.getItem(LOGININFO);
      if (loginInfo) {
        const { username, password } = JSON.parse(loginInfo);

        setRememberPassword(true);

        form.setFieldsValue({
          username: tool.uncompile(username),
          password: tool.uncompile(password),
        });
      }
      if (!loginInfo) {
        document.getElementById('username')?.focus();
      }
    },
    remember: (username: string, password: string) => {
      if (rememberPassword) {
        localStorage.setItem(
          LOGININFO,
          JSON.stringify({
            username: tool.compile(username),
            password: tool.compile(password),
          }),
        );
      } else {
        localStorage.removeItem(LOGININFO);
      }
    }
  };

  // 2. 处理登录
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { username, password } = await form.validateFields();

      const account = await Account.Login({ username, password });

      if (!account || account.code !== 0 || !account.data) {
        // 登录失败
        return account;
      }

      PassWord.remember(username, password);

      Message.success('登录成功');

      localStorage.setItem(TOKEN, window.atob(account.data.token));

      setCurrentUser(account.data);

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
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
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
