import { Link, Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/admin/">管理界面</Link>
      <br />
      <Link to="/p5/">p5</Link>
      <br />
      <Link to="/playground/1">playground</Link>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
