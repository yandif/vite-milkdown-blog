import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/admin/">管理界面</Link>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
