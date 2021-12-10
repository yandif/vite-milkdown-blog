import { message } from '@/components/Message';
import { useEffect } from 'react';
export default function App() {
  useEffect(() => {
    message.success('消失提示成功');
  }, []);
  return <div>App</div>;
}
