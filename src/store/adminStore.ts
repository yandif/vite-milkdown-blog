import { action, intercept, observable } from 'mobx';

const data = observable({
  user: null,
  roles: [],
  menus: [],
});

const setCurrentUser = action((user: object) => {
  data.user = user;
});

const AdminStore: AdminStoreType = {
  data,
  setCurrentUser,
};

export default AdminStore;


const disposer = intercept(data, 'user', (change) => {
  const { newValue } = change;
  if (newValue) {
    // console.log(newValue);
  }
  return change;
  // disposer();//停止监听
});

export type AdminStoreType = {
  data: unknown;
  setCurrentUser: (user: object) => void;
};
