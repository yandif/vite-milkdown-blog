import ReactDOM from 'react-dom';
import '@/assets/style/main.less';
import App from './App';
import MobxProvider from '@/store';

ReactDOM.render(
  <MobxProvider>
    <App />
  </MobxProvider>,
  document.getElementById('root')
);
