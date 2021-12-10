import { action, intercept, observable } from "mobx";

const data = observable({
  user: null,
  roles: [],
  menus: [],
});

const setUser: (value: any) => void = action((value: any) => {
  data.user = value;
});

const disposer = intercept(data, "user", (change) => {
  const { newValue } = change;
  if (newValue) {
    // console.log(newValue);
  }
  return change;
  // disposer();//停止监听
});

export type AdminStore = {
  data: any;
  setUser: (value: any) => void;
};

const adminStore: AdminStore = {
  data,
  setUser,
};

export default adminStore;
