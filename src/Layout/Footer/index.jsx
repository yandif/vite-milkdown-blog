import React from 'react';
import { Layout } from 'antd';
import './index.css';

const { Footer } = Layout;

const AdminFooter = ({ className }) => {
  return (
    <Footer className={`admin-footer ${className}`}>
      © 2018-{new Date().getFullYear() + ' '}
      <a href="https://blog.isluo.com" target="_blank" rel="noopener noreferrer">
        blog.isluo.com
      </a>
      , Inc.
    </Footer>
  );
};

export default AdminFooter;
