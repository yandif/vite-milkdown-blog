import { Link, useOutlet } from 'react-router-dom';

import { useWinBox } from '@/components/WinBox';

function AdminLayout() {
  const outlet = useOutlet();
  const { open } = useWinBox();
  return (
    <div>
      <h1>Admin</h1>
      <button onClick={() => open()}>打开弹窗</button>
      <Link to="/">首页</Link>
      {outlet}
    </div>
  );
}

export default AdminLayout;
