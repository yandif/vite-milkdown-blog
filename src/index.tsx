import '@/assets/style/main.less';
import 'antd/dist/antd.css';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import MessageProvider from '@/components/Message';
import NProgressProvider from '@/components/NProgress';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <NProgressProvider>
      <ConfigProvider locale={zhCN}>
        <MessageProvider>
          <Router>
            <App />
          </Router>
        </MessageProvider>
      </ConfigProvider>
    </NProgressProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
