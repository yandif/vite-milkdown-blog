import Blog from './Blog';
import Demo from './Demo';
import TestApi from './TestApi';

const routes = [];
const registerRoute = (path, component) => routes.push({ path, component });
registerRoute('/', Blog);
registerRoute('/demo', Demo);
registerRoute('/test', TestApi);
export default routes;
