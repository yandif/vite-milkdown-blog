import { Route } from '@/components/Routes';
import adminRoutes from '@/pages/Admin/routes';
import homeRoutes from '@/pages/Home/routes';
import p5Routes from '@/pages/P5/routes';
import playgroundRoutes from '@/pages/playground/routes';

const routes: Route[] = [
  homeRoutes,
  adminRoutes,
  p5Routes,
  playgroundRoutes,
];

export default routes;
