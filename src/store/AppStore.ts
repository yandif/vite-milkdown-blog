import { action, intercept, observable } from 'mobx';

const data = observable({
  isLoading: false,
  loadingKey: 0,
  isInit: false,
  hideHeader: false,
  hideSidebar: false,
  hideFooter: false,
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

const setHidden = action(({ hideHeader, hideSidebar, hideFooter }) => {
  data.hideHeader = hideHeader;
  data.hideSidebar = hideSidebar;
  data.hideFooter = hideFooter;
});

intercept(data, 'isLoading', (change) => {
  const { newValue } = change;
  if (newValue) {
    setLoadingKey(data.loadingKey ^ 1);
  }
  return change;
});

const AppStore: AppStoreType = {
  data,
  setIsLoading,
  setIsInit,
  setHidden,
};

export default AppStore;

export type AppStoreType = {
  data: unknown;
  setIsLoading: (user: boolean) => void;
};
