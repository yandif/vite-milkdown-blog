import { message } from '@/components/Message';
import Bread from '@/Layout/Bread/index';
import Footer from '@/Layout/Footer/index';
import Header from '@/Layout/Header/index';
import Sider from '@/Layout/Sider/index';
import { Layout } from 'antd';
import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';
const { Content } = Layout;

const AdminLayout = ({ children, history, location, hiddenPath = [], setData }) => {
  const [collapsed, setCollapsed] = useState(false);

  const hidden = hiddenPath.filter(path => path === location.pathname)?.length > 0;

  // 退出登录
  const handleLogout = useCallback(() => {
    message.success('退出成功');
    setData('userBasicInfo', null);
    history.push('/login');
  }, []);

  const data = [
    {
      id: 1,
      title: '首页',
      icon: 'icon-home',
      url: '/home',
      parent: null,
      desc: '首页',
      sorts: 0,
      conditions: 1,
    },
    {
      id: 2,
      title: '系统管理',
      icon: 'icon-setting',
      url: '/system',
      parent: null,
      desc: '系统管理目录分支',
      sorts: 1,
      conditions: 1,
    },
    {
      id: 3,
      title: '用户管理',
      icon: 'icon-user',
      url: '/system/account',
      parent: 2,
      desc: '系统管理/用户管理',
      sorts: 0,
      conditions: 1,
    },
    {
      id: 4,
      title: '角色管理',
      icon: 'icon-team',
      url: '/system/role',
      parent: 2,
      desc: '系统管理/角色管理',
      sorts: 1,
      conditions: 1,
    },
    {
      id: 5,
      title: '权限管理',
      icon: 'icon-safetycertificate',
      url: '/system/power',
      parent: 2,
      desc: '系统管理/权限管理',
      sorts: 2,
      conditions: 1,
    },
    {
      id: 6,
      title: '菜单管理',
      icon: 'icon-appstore',
      url: '/system/menu',
      parent: 2,
      desc: '系统管理/菜单管理',
      sorts: 3,
      conditions: 1,
    },
  ];
  const userinfo = {
    userBasicInfo: {
      id: 1,
      username: 'admin',
      password: '123456',
      phone: '13600000000',
      email: 'admin@react.com',
      desc: '超级管理员',
      conditions: 1,
      roles: [1, 2, 3],
    },
    roles: [
      {
        id: 1,
        title: '超级管理员',
        desc: '超级管理员拥有所有权限',
        sorts: 1,
        conditions: 1,
        menuAndPowers: [
          { menuId: 1, powers: [] },
          { menuId: 2, powers: [] },
          { menuId: 3, powers: [1, 2, 3, 4, 5] },
          { menuId: 4, powers: [6, 7, 8, 9, 18] },
          { menuId: 5, powers: [10, 11, 12, 13] },
          { menuId: 6, powers: [14, 15, 16, 17] },
        ],
      },
      {
        id: 2,
        title: '普通管理员',
        desc: '普通管理员',
        sorts: 2,
        conditions: 1,
        menuAndPowers: [
          { menuId: 1, powers: [] },
          { menuId: 2, powers: [] },
          { menuId: 3, powers: [3] },
          { menuId: 4, powers: [6, 7, 8, 18] },
          { menuId: 5, powers: [10, 11, 12] },
          { menuId: 6, powers: [14, 15, 16] },
        ],
      },
      {
        id: 3,
        title: '运维人员',
        desc: '运维人员不能删除对象',
        sorts: 3,
        conditions: 1,
        menuAndPowers: [
          { menuId: 1, powers: [] },
          { menuId: 2, powers: [] },
          { menuId: 3, powers: [3] },
          { menuId: 4, powers: [7, 8] },
          { menuId: 5, powers: [11, 12] },
          { menuId: 6, powers: [15, 16] },
        ],
      },
    ],
    menus: data,
    powers: [
      {
        id: 1,
        menu: 3,
        title: '新增',
        code: 'user:add',
        desc: '用户管理 - 添加权限',
        sorts: 1,
        conditions: 1,
      },
      {
        id: 2,
        menu: 3,
        title: '修改',
        code: 'user:up',
        desc: '用户管理 - 修改权限',
        sorts: 2,
        conditions: 1,
      },
      {
        id: 3,
        menu: 3,
        title: '查看',
        code: 'user:query',
        desc: '用户管理 - 查看权限',
        sorts: 3,
        conditions: 1,
      },
      {
        id: 4,
        menu: 3,
        title: '删除',
        code: 'user:del',
        desc: '用户管理 - 删除权限',
        sorts: 4,
        conditions: 1,
      },
      {
        id: 5,
        menu: 3,
        title: '分配角色',
        code: 'user:role',
        desc: '用户管理 - 分配角色权限',
        sorts: 5,
        conditions: 1,
      },
      {
        id: 6,
        menu: 4,
        title: '新增',
        code: 'role:add',
        desc: '角色管理 - 添加权限',
        sorts: 1,
        conditions: 1,
      },
      {
        id: 7,
        menu: 4,
        title: '修改',
        code: 'role:up',
        desc: '角色管理 - 修改权限',
        sorts: 2,
        conditions: 1,
      },
      {
        id: 8,
        menu: 4,
        title: '查看',
        code: 'role:query',
        desc: '角色管理 - 查看权限',
        sorts: 3,
        conditions: 1,
      },
      {
        id: 18,
        menu: 4,
        title: '分配权限',
        code: 'role:power',
        desc: '角色管理 - 分配权限',
        sorts: 4,
        conditions: 1,
      },
      {
        id: 9,
        menu: 4,
        title: '删除',
        code: 'role:del',
        desc: '角色管理 - 删除权限',
        sorts: 5,
        conditions: 1,
      },
      {
        id: 10,
        menu: 5,
        title: '新增',
        code: 'power:add',
        desc: '权限管理 - 添加权限',
        sorts: 1,
        conditions: 1,
      },
      {
        id: 11,
        menu: 5,
        title: '修改',
        code: 'power:up',
        desc: '权限管理 - 修改权限',
        sorts: 2,
        conditions: 1,
      },
      {
        id: 12,
        menu: 5,
        title: '查看',
        code: 'power:query',
        desc: '权限管理 - 查看权限',
        sorts: 3,
        conditions: 1,
      },
      {
        id: 13,
        menu: 5,
        title: '删除',
        code: 'power:del',
        desc: '权限管理 - 删除权限',
        sorts: 2,
        conditions: 1,
      },
      {
        id: 14,
        menu: 6,
        title: '新增',
        code: 'menu:add',
        desc: '菜单管理 - 添加权限',
        sorts: 1,
        conditions: 1,
      },
      {
        id: 15,
        menu: 6,
        title: '修改',
        code: 'menu:up',
        desc: '菜单管理 - 修改权限',
        sorts: 2,
        conditions: 1,
      },
      {
        id: 16,
        menu: 6,
        title: '查看',
        code: 'menu:query',
        desc: '菜单管理 - 查看权限',
        sorts: 3,
        conditions: 1,
      },
      {
        id: 17,
        menu: 6,
        title: '删除',
        code: 'menu:del',
        desc: '菜单管理 - 删除权限',
        sorts: 2,
        conditions: 1,
      },
    ],
  };
  return (
    <Layout>
      {!hidden && <Sider collapsed={collapsed} data={data} history={history} location={location} />}
      <Layout>
        {!hidden && [
          <Header
            collapsed={collapsed}
            userinfo={userinfo}
            onToggle={() => setCollapsed(!collapsed)}
            onLogout={handleLogout}
          />,
          <Bread menus={userinfo.menus} location={location} />,
        ]}
        <Content
          style={{
            margin: '0 16px',
            padding: 16,
            minHeight: 280,
            backgroundColor: '#fff',
          }}
        >
          {children}
        </Content>
        {!hidden && <Footer />}
      </Layout>
    </Layout>
  );
};

export default withRouter(AdminLayout);
