import { message } from '@/components/Message';
import Bread from '@/Layout/Bread/index';
import Footer from '@/Layout/Footer/index';
import Header from '@/Layout/Header/index';
import Sider from '@/Layout/Sider/index';
import { Layout } from 'antd';
import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';
import { TOKEN } from '@/constants';
const { Content } = Layout;

const AdminLayout = props => {
  const {
    children,
    history,
    location,
    hiddenPath = [],
    adminStore: {
      setUser,
      data: { user },
    },
  } = props;
  const [collapsed, setCollapsed] = useState(false);

  const hidden = hiddenPath.filter(path => path === location.pathname)?.length > 0;

  // 退出登录
  const handleLogout = useCallback(() => {
    message.success('退出成功');
    setUser(null);
    localStorage.setItem(TOKEN, '');
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
    userBasicInfo: user,
    menus: data,
  };
  return (
    <Layout key="admin-layout">
      {!hidden && (
        <Sider
          key="admin-sider"
          collapsed={collapsed}
          data={data}
          history={history}
          location={location}
        />
      )}
      <Layout key="admin-layout2">
        {!hidden && [
          <Header
            key="admin-header"
            collapsed={collapsed}
            userinfo={userinfo}
            onToggle={() => setCollapsed(!collapsed)}
            onLogout={handleLogout}
          />,
          <Bread key="admin-bread" menus={userinfo.menus} location={location} />,
        ]}
        <Content
          key="admin-content"
          style={{
            margin: '0 16px',
            padding: 16,
            minHeight: 280,
            backgroundColor: '#fff',
          }}
        >
          {children}
        </Content>
        {!hidden && <Footer key="admin-footer" />}
      </Layout>
    </Layout>
  );
};

export default withRouter(inject('adminStore')(observer(AdminLayout)));
