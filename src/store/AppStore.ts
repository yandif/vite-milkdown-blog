import { action, intercept, observable } from 'mobx';

export type AppStoreType = {
  data: {
    isLoading: boolean;
    loadingKey: number;
    isInit: boolean;
    hideHeader: boolean;
    hideSidebar: boolean;
    hideFooter: boolean;
  };
  setIsLoading: (value: boolean) => void;
  setIsInit: (value: boolean) => void;
  setLoadingKey: (value: number) => void;
  setHidden: ({
    hideHeader,
    hideSidebar,
    hideFooter,
  }: {
    hideHeader: boolean;
    hideSidebar: boolean;
    hideFooter: boolean;
  }) => void;
};

const AppStore: AppStoreType = {
  data: observable({
    isLoading: false,
    loadingKey: 0,
    isInit: false,
    hideHeader: false,
    hideSidebar: false,
    hideFooter: false,
  }),
  setIsLoading: action((value: boolean) => {
    AppStore.data.isLoading = value;
  }),
  setLoadingKey: action((value: number) => {
    AppStore.data.loadingKey = value;
  }),
  setIsInit: action((value: boolean) => {
    AppStore.data.isInit = value;
  }),
  setHidden: action(({ hideHeader, hideSidebar, hideFooter }) => {
    AppStore.data.hideHeader = hideHeader;
    AppStore.data.hideSidebar = hideSidebar;
    AppStore.data.hideFooter = hideFooter;
  }),
};

intercept(AppStore.data, 'isLoading', (change) => {
  const { newValue } = change;
  if (newValue) {
    AppStore.setLoadingKey(AppStore.data.loadingKey ^ 1);
  }
  return change;
});

export default AppStore;
