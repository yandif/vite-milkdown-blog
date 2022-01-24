import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { FC, useCallback, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { message } from '@/components/Message';
import { TOKEN } from '@/constants';
import AdminStore from '@/store/AdminStore';
import AppStore from '@/store/AppStore';

import Bread from './Bread';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

const { Content } = Layout;

const AdminLayout: FC<{ baseName?: string }> = ({ baseName = '' }) => {
  const [_Appstore] = useState(() => AppStore);
  const [_AdminStore] = useState(() => AdminStore);
  const { data: { hideFooter, hideHeader, hideSidebar } } = _Appstore;
  const { data: { user }, setCurrentUser } = _AdminStore;
  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate();
  // 退出登录
  const handleLogout = useCallback(() => {
    message.success('退出成功');
    setCurrentUser(null);
    localStorage.removeItem(TOKEN);
    nav('login');
  }, []);
  console.log('123123123123');
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
  // TODO: 把状态分到子组件中，不通过props传递
  const userinfo = {
    userBasicInfo: user,
    menus: data,
  };
  return (
    <Layout key="admin-layout">
      {!hideSidebar && (
        <Sider
          key="admin-sider"
          collapsed={collapsed}
          data={data}
          baseName={baseName}
        />
      )}
      <Layout key="admin-layout2">
        {!hideHeader && (
          <Header
            key="admin-header"
            collapsed={collapsed}
            userinfo={userinfo}
            onToggle={() => setCollapsed(!collapsed)}
            onLogout={handleLogout}
          />
        )}
        <div style={{ maxHeight: 'calc(100vh - 66px)', overflowY: 'auto' }}>
          {!hideHeader && (
            <Bread
              key="admin-bread"
              menus={userinfo.menus}
            />
          )}
          <Content
            key="admin-content"
            style={{
              margin: '0 16px',
              padding: 16,
              minHeight: 'calc(100vh - 173px)',
              backgroundColor: '#fff',
            }}
          >
            <Outlet />
          </Content>
          {!hideFooter && <Footer key="admin-footer" />}
        </div>
      </Layout>
    </Layout>
  );
};

export default observer(AdminLayout);
