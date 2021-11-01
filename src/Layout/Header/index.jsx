import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Tooltip, Menu, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  GithubOutlined,
  ChromeOutlined,
  LogoutOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import useFullScreen from '@/hooks/useFullScreen';

const { Header } = Layout;

import './index.css';

const AdminHeader = ({ collapsed, userinfo: { userBasicInfo }, onToggle, onLogout }) => {
  const [fullScreen, requestFullScreen, exitFullScreen] = useFullScreen();

  const FullScreen = () => (
    <Tooltip placement="bottom" title={fullScreen ? '退出全屏' : '全屏'}>
      <div className="full all_center" onClick={fullScreen ? exitFullScreen : requestFullScreen}>
        {fullScreen ? (
          <FullscreenExitOutlined className="icon" />
        ) : (
          <FullscreenOutlined className="icon" />
        )}
      </div>
    </Tooltip>
  );

  const Toggler = () => (
    <Tooltip placement="bottom" title={collapsed ? '展开菜单' : '收起菜单'}>
      <MenuFoldOutlined
        className={collapsed ? 'trigger fold' : 'trigger'}
        onClick={() => onToggle()}
      />
    </Tooltip>
  );

  const UserInfo = () => (
    <Dropdown
      overlay={
        <Menu className="menu" selectedKeys={[]}>
          <Menu.Item key="blog">
            <a href="https://blog.isluo.com" target="_blank" rel="noopener noreferrer">
              <ChromeOutlined />
              blog.isluo.com
            </a>
          </Menu.Item>
          <Menu.Item key="github">
            <a
              href="https://github.com/javaLuo/react-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
              GitHub
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout" onClick={() => onLogout()}>
            <LogoutOutlined />
            退出登录
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
    >
      <div className="userhead all_center">
        <SmileOutlined />
        <span className="username">{userBasicInfo.username}</span>
      </div>
    </Dropdown>
  );

  const Login = () => (
    <Tooltip placement="bottom" title="点击登录">
      <div className="full all_center">
        <Link to="/admin/login">未登录</Link>
      </div>
    </Tooltip>
  );

  return (
    <Header className="admin-header">
      <Toggler />
      <div className="rightBox">
        <FullScreen />
        {userBasicInfo ? <UserInfo /> : <Login />}
      </div>
    </Header>
  );
};

export default AdminHeader;