import React from 'react';
import { Layout } from 'antd';
import './index.css';

const { Footer } = Layout;

const AdminFooter = ({ white }) => {
  return (
    <Footer className={`admin-footer ${white && 'white'}`}>
      © 2018-{new Date().getFullYear() + ' '}
      <a href="https://blog.isluo.com" target="_blank" rel="noopener noreferrer">
        blog.isluo.com
      </a>
      , Inc.
    </Footer>
  );
};

export default AdminFooter;
