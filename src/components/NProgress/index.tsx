import './index.less';

import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';

import AppStore from '@/store/AppStore';

import Progress from './Progress';

const NProgressProvider: FC = ({ children }) => {

  const [_AppStore] = useState(() => AppStore);

  const { data: { isLoading, loadingKey }, } = _AppStore;

  return (
    <>
      <Progress isAnimating={isLoading} key={loadingKey} color="#29d" />
      {children}
    </>
  );
};

export default observer(NProgressProvider);
