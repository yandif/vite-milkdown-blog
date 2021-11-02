import LogoImg from '@/assets/img/logo.png';
import Background from '@/components/Background';
import { Account } from '@/services';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

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

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const Login = useCallback(async (username, password) => {
   
    let userBasicInfo = null;
    let roles = [];
    let menus = [];
    let powers = [];

    /** 1.登录 （返回信息中有该用户拥有的角色id） **/
    const res = await Account.Login({ username, password });
    if (!res || res.code !== 0 || !res1.data) {
      // 登录失败
      return res;
    }

    userBasicInfo = res1.data;

    // /** 2.根据角色id获取角色信息 (角色信息中有该角色拥有的菜单id和权限id) **/
    // const res2 = await dispatch.sys.getRoleById({
    //   id: (userBasicInfo as UserBasicInfo).roles,
    // });
    // if (!res2 || res2.status !== 200) {
    //   // 角色查询失败
    //   return res2;
    // }

    // roles = res2.data.filter((item: Role) => item.conditions === 1); // conditions: 1启用 -1禁用

    // /** 3.根据菜单id 获取菜单信息 **/
    // const menuAndPowers = roles.reduce(
    //   (a, b) => [...a, ...b.menuAndPowers],
    //   []
    // );
    // const res3 = await dispatch.sys.getMenusById({
    //   id: Array.from(new Set(menuAndPowers.map((item) => item.menuId))),
    // });
    // if (!res3 || res3.status !== 200) {
    //   // 查询菜单信息失败
    //   return res3;
    // }

    // menus = res3.data.filter((item: Menu) => item.conditions === 1);

    // /** 4.根据权限id，获取权限信息 **/
    // const res4 = await dispatch.sys.getPowerById({
    //   id: Array.from(
    //     new Set(menuAndPowers.reduce((a, b) => [...a, ...b.powers], []))
    //   ),
    // });
    // if (!res4 || res4.status !== 200) {
    //   // 权限查询失败
    //   return res4;
    // }
    // powers = res4.data.filter((item: Power) => item.conditions === 1);
    return { status: 200, data: { userBasicInfo, roles, menus, powers } };
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { username, password } = await form.validateFields();
      const res = await Login(username, password);
    } catch (e) {
      //
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
