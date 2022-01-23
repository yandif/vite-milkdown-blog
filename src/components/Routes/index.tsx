import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Convert from './convert';

export type Route = {
  path: string;
  element?: JSX.Element;
  children?: Route[];
  caseSensitive?: boolean;
  index?: boolean;
  auth?: boolean;
  hideHeader?: boolean;
  hideSidebar?: boolean;
  hideFooter?: boolean;
}

const Routes: FC<{ routes: Route[] }> = observer(({ routes }) => {
  const routing = useRoutes(Convert(routes));
  return routing;
});

export default Routes;
