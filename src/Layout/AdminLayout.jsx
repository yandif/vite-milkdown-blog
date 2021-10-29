import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useState } from 'react';
import './Adminlayout.css';
import Sider from '@/Layout/Sider/index';
import { withRouter } from 'react-router';
const { Header, Content } = Layout;

const AdminLayout = withRouter(({ children, history, location }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  const data = [
    {
      id: 1,
      title: '首页',
      icon: 'icon-home',
      url: '/admin/home',
      parent: null,
      desc: '首页',
      sorts: 0,
      conditions: 1,
    },
    {
      id: 2,
      title: '系统管理',
      icon: 'icon-setting',
      url: '/admin',
      parent: null,
      desc: '系统管理目录分支',
      sorts: 1,
      conditions: 1,
    },
    {
      id: 3,
      title: '用户管理',
      icon: 'icon-user',
      url: '/admin/account',
      parent: 2,
      desc: '系统管理/用户管理',
      sorts: 0,
      conditions: 1,
    },
    {
      id: 4,
      title: '角色管理',
      icon: 'icon-team',
      url: '/admin/role',
      parent: 2,
      desc: '系统管理/角色管理',
      sorts: 1,
      conditions: 1,
    },
    {
      id: 5,
      title: '权限管理',
      icon: 'icon-safetycertificate',
      url: '/admin/power',
      parent: 2,
      desc: '系统管理/权限管理',
      sorts: 2,
      conditions: 1,
    },
    {
      id: 6,
      title: '菜单管理',
      icon: 'icon-appstore',
      url: '/admin/menu',
      parent: 2,
      desc: '系统管理/菜单管理',
      sorts: 3,
      conditions: 1,
    },
  ];
  return (
    <Layout className="admin-layout">
      <Sider collapsed={collapsed} data={data} history={history} location={location} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
});
export default AdminLayout;
