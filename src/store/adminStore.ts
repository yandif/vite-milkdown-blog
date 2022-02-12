import { action, intercept, observable } from 'mobx';

export type AdminStoreType = {
  data: {
    user: null | { [key: string]: any };
    roles: [];
    menus: [];
  };
  setCurrentUser: (user: object | null) => void;
};

const AdminStore: AdminStoreType = {
  data: observable({
    user: null,
    roles: [],
    menus: [],
  }),
  setCurrentUser: action((user) => {
    AdminStore.data.user = user;
  }),
};

export default AdminStore;

const disposer = intercept(AdminStore.data, 'user', (change) => {
  const { newValue } = change;
  if (newValue) {
    // console.log(newValue);
  }
  return change;
  disposer(); //停止监听
});
