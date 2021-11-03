import { action, autorun, observable } from 'mobx';

const data = observable({
  userBasicInfo: null,
  role: [],
  menus: [],
  power: [],
});

const setData = action((key, value) => {
  data[key] = value;
});

export default {
  data,
  setData,
};
