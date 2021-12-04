import { get, post, patch, del } from '@/utils/axios';
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
  createUser(data) {
    return post('/account', data);
  },
  editUser(id, data) {
    return patch(`/account/${id}`, data);
  },
  deleteUser(id) {
    return del(`/account/${id}`);
  },
};

export const Role = {
  getPageList(params) {
    return get(`/role${Tool.genURLSearchParams(params)}`);
  },
  create(data) {
    return post('/role', data);
  },
  edit(id, data) {
    return patch(`/role/${id}`, data);
  },
  deleteRole(id) {
    return del(`/role/${id}`);
  },
};
