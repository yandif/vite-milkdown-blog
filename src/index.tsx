import '@/assets/style/main.less';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import MessageProvider from '@/components/Message';
import NProgressProvider from '@/components/NProgress';
import { WinBoxProvider } from '@/components/WinBox';

import App from './App';

ReactDOM.render(
  <NProgressProvider>
    <ConfigProvider locale={zhCN}>
      <WinBoxProvider>
        <MessageProvider>
          <Router>
            <App />
          </Router>
        </MessageProvider>
      </WinBoxProvider>
    </ConfigProvider>
  </NProgressProvider>,
  document.getElementById('root'),
);
