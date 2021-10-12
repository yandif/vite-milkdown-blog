import Blog from "./Blog";
import Demo from './Demo';

const routes = [];
const registerRoute = (path, component) => routes.push({ path, component });
registerRoute("/", Blog);
registerRoute("/demo", Demo);

export default routes;
