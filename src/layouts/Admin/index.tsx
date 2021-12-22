import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function AdminLayout() {
  return (
    <div>
      <h1>Admin</h1>
      <Link to="/">首页</Link>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
