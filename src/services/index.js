import { get, post } from '@/utils/axios';

export const Account = {
  Login(data) {
    return post('/login', data);
  },
  getMenus() {
    return get('/menus');
  },
  getUserInfo() {
    return get('/account/me');
  },
  getPageList() {
    return get('/account');
  },
};
