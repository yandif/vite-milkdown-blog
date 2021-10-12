import React from 'react';
import Layout from './Layout';
import Main from './Main';
import Sidebar from './Sidebar';

export default function Blog() {
  return <Layout sider={<Sidebar />} main={<Main />} />;
}
