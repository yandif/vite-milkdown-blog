import './index.css';

import { Layout } from 'antd';
import React, { FC } from 'react';

const { Footer } = Layout;

const AdminFooter: FC<any> = ({ white = false }) => {
  return (
    <Footer className={`admin-footer ${white && 'white'}`}>
      © 2018-{new Date().getFullYear() + ' '}
      <a
        href="https://blog.isluo.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        blog.isluo.com
      </a>
      , Inc.
    </Footer>
  );
};

export default AdminFooter;
