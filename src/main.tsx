import ReactDOM from 'react-dom';
import '@/assets/style/main.less';
import App from './App';
import MobxProvider from '@/store';
import MessageProvider from '@/components/Message';

ReactDOM.render(
  <MobxProvider>
    <MessageProvider>
      <App />
    </MessageProvider>
  </MobxProvider>,
  document.getElementById('root')
);
