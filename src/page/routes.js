import Blog from './Blog';
import Demo from './Demo';
import TestApi from './TestApi';
import Admin from './Admin';

const routes = [];
const registerRoute = (path, component, exact = true) => routes.push({ path, component, exact });

registerRoute('/demo', Demo);
registerRoute('/blog', Blog);
registerRoute('/admin', Admin, false);

export default routes;
