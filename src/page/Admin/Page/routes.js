import Demo from '@/page/Demo';
const routes = [];
const registerRoute = (path, component, exact = true, auth = false) =>
  routes.push({ path, component, exact, auth });

registerRoute('/demo', Demo);
registerRoute('/login', Demo);
registerRoute('/account', Demo, true, true);
export default routes;
