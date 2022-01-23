import { RouteObject } from 'react-router-dom';

import Auth from './Auth';
import { Route } from './index';

/**
 *  转化route
 */
const Convert = (routes: Route[]): RouteObject[] => {
  return routes.map(
    ({
      path,
      element,
      children,
      caseSensitive = false,
      index = false,
      auth = false,
      hideHeader = false,
      hideSidebar = false,
      hideFooter = true,
    }) => {
      const route: RouteObject = {
        path,
        element: element ? (
          <Auth
            element={element}
            auth={auth}
            hideHeader={hideHeader}
            hideSidebar={hideSidebar}
            hideFooter={hideFooter}
          />
        ) : undefined,
        children,
        index,
        caseSensitive,
      };
      
      if (children) {
        route.children = Convert(children);
      }

      return route;
    },
  );
};

export default Convert;
