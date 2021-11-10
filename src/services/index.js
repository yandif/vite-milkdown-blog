import { get, post } from '@/utils/axios';
import Tool from '@/utils/tool';

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
  getPageList(params) {
    return get(`/account${Tool.genURLSearchParams(params)}`);
  },
};
