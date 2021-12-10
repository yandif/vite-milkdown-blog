import ReactDOM from 'react-dom';
import MobxProvider from '@/store';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import MessageProvider from '@/components/Message';
import App from './App';

import 'antd/dist/antd.css';
import '@/assets/style/main.less';

ReactDOM.render(
  <MobxProvider>
    <MessageProvider>
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
    </MessageProvider>
  </MobxProvider>,
  document.getElementById('root')
);
