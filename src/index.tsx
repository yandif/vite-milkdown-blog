import React from 'react';
import ReactDOM from 'react-dom';
import MobxProvider from '@/store';

import MessageProvider from '@/components/Message';
import App from './App';

import { WinBoxProvider } from '@/components/WinBox';

import '@/assets/style/main.less';

ReactDOM.render(
  <React.StrictMode>
    <MobxProvider>
      <MessageProvider>
        <WinBoxProvider>
          <App />
        </WinBoxProvider>
      </MessageProvider>
    </MobxProvider>{' '}
  </React.StrictMode>,
  document.getElementById('root')
);
