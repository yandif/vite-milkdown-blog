import { inject, observer } from 'mobx-react';
import { FC, useState } from 'react';
import Progress from './Progress';
import './index.less';

const NProgressProvider: FC = ({
  AppStore: {
    data: { isLoading, loadingKey },
  },
  children,
}) => {
  return (
    <>
      <Progress isAnimating={isLoading} key={loadingKey} color="#007aff" />
      {children}
    </>
  );
};

export default inject('AppStore')(observer(NProgressProvider));
