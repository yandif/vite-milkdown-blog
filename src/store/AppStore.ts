import { action, observable } from 'mobx';

const data = observable({
  isLoading: false,
  isInit: false,
});

const setIsLoading = action((value: boolean) => {
  data.isLoading = value;
});

const setIsInit = action((value: boolean) => {
  data.isInit = value;
});

const AppStore: AppStoreType = {
  data,
  setIsLoading,
  setIsInit,
};

export default AppStore;

export type AppStoreType = {
  data: unknown;
  setIsLoading: (user: boolean) => void;
};
