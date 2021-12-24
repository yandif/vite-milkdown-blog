import { AppStoreType } from '@/store/AppStore';
import { inject, observer } from 'mobx-react';
import { FC } from 'react';
import './index.less';
import Progress from './Progress';

type Props = {
  AppStore: AppStoreType;
  children: JSX.Element;
}

const NProgressProvider: FC = (props) => {
  const {
    AppStore: {
      data: { isLoading, loadingKey },
    },
    children,
  } = props as Props;
  return (
    <>
      <Progress isAnimating={isLoading} key={loadingKey} color="#29d" />
      {children}
    </>
  );
};

export default inject('AppStore')(observer(NProgressProvider));
