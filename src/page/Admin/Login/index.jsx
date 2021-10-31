import LogoImg from '@/assets/img/logo.png';
import Background from '@/components/Background';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const Login = () => {
  const prefix = 'page-login';

  return (
    <div className={prefix}>
      <div className={`${prefix}-background`}>
        <Background row={12} col={8} />
      </div>
      <LoginForm prefix={prefix} />
    </div>
  );
};

export default Login;

const LoginForm = ({ prefix }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className={`${prefix}-form ${show && 'show'}`}>
      <Form>
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
            // onPressEnter={onSubmit}
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
            // onPressEnter={onSubmit}
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
            // loading={loading}
            // onClick={onSubmit}
          >
            {/* {loading ? '请稍后' : '登录'} */}
            登录
          </Button>
        </div>
      </Form>
    </div>
  );
};
