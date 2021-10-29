import React, { lazy, Suspense, useEffect, useState } from 'react';
import Loading from '../Loading';

const asyncRouter = fn => {
  return function AsyncRoute(props) {
    const Component = lazy(fn);
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default asyncRouter;
