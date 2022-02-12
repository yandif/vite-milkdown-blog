/**
 * @description: 按需异步加载组件
 */
import React, { lazy, Suspense } from 'react';

type Fn = () => Promise<{ default: React.ComponentType<any> }>;

const asyncRouter = (fn: Fn) => {
  return function AsyncRoute(props: any) {
    const Component = lazy(fn);
    return (
      <Suspense fallback={null}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default asyncRouter;
