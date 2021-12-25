import { Link, useOutlet } from 'react-router-dom';

function AdminLayout() {
  const outlet = useOutlet();
  return (
    <div>
      <h1>Admin</h1>
      <Link to="/">首页</Link>
      {outlet}
    </div>
  );
}

export default AdminLayout;
