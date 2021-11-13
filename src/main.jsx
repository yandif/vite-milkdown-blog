import React from 'react';
import ReactDOM from 'react-dom';
import MessageProvider from '@/components/Message';
import RootRouter from '@/page/RootRouter';
import MobxProvider from '@/store';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

import 'antd/dist/antd.css';
import '@/assets/styles/global.css';
moment.locale('zh-cn');

ReactDOM.render(
  <MobxProvider>
    <MessageProvider>
      <ConfigProvider locale={zh_CN}>
        <RootRouter />
      </ConfigProvider>
    </MessageProvider>
  </MobxProvider>,
  document.getElementById('root')
);
