import { action, observable } from 'mobx';

const data = observable({
  isLoading: false,
});

const setIsLoading = action((value: boolean) => {
  data.isLoading = value;
});

const AppStore: AppStoreType = {
  data,
  setIsLoading,
};

export default AppStore;

export type AppStoreType = {
  data: unknown;
  setIsLoading: (user: boolean) => void;
};
