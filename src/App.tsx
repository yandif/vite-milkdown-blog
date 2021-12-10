import { message } from '@/components/Message';
import { useEffect } from 'react';
import WinBox from '@/components/WinBox';
export default function App() {
  useEffect(() => {
    message.success('消失提示成功');
  }, []);
  return (
    <div>
      <WinBox>
        <h1>haha</h1>
      </WinBox>
      <WinBox>
        <h1>haha</h1>
      </WinBox>
    </div>
  );
}
