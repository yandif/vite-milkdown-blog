import { action, intercept, observable } from 'mobx';

const data = observable({
  isLoading: false,
  loadingKey: 0,
  isInit: false,
});

const setIsLoading = action((value: boolean) => {
  data.isLoading = value;
});

const setIsInit = action((value: boolean) => {
  data.isInit = value;
});

const setLoadingKey = action((value: number) => {
  data.loadingKey = value;
});

intercept(data, 'isLoading', (change) => {
  const { newValue } = change;
  if (newValue) {
    setLoadingKey(data.loadingKey ^ 1)
  }
  return change;
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
