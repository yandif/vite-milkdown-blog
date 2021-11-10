import { action, intercept, observable } from 'mobx';

const data = observable({
  user: null,
  roles: [],
  menus: [],
});

const setUser = action(value => {
  data.user = value;
});

const disposer = intercept(data, 'user', change => {
  const { newValue } = change;
  if (newValue) {
    // console.log(newValue);
  }
  return change;
  // disposer();//停止监听
});

export default {
  data,
  setUser,
};
