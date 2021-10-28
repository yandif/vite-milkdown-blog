import { action, autorun, observable } from 'mobx';

const data = observable({
  user: null,
});

const setUser = action(userData => {
  data.user = userData;
});

export default {
  data,
  setUser,
};
