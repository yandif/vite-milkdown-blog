import React from 'react';
import ReactDOM from 'react-dom';
import MobxProvider from '@/store';
import { ConfigProvider } from 'antd';
import MessageProvider from '@/components/Message';
import { WinBoxProvider } from '@/components/WinBox';
import zhCN from 'antd/lib/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '@/assets/style/main.less';

ReactDOM.render(
  <React.StrictMode>
    <MobxProvider>
      <ConfigProvider locale={zhCN}>
        <MessageProvider>
          <WinBoxProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </WinBoxProvider>
        </MessageProvider>
      </ConfigProvider>
    </MobxProvider>{' '}
  </React.StrictMode>,
  document.getElementById('root')
);
