import { tool } from '@/utils';
import { del, get, patch, post } from '@/utils/axios';

export const Account = {
  Login(data: unknown) {
    return post('/login', data);
  },
  getMenus() {
    return get('/menus');
  },
  getUserInfo() {
    return get('/account/me');
  },
  getPageList(params: any) {
    return get(`/account${tool.genParamString(params)}`);
  },
  createUser(data: unknown) {
    return post('/account', data);
  },
  editUser(id: any, data: unknown) {
    return patch(`/account/${id}`, data);
  },
  deleteUser(id: any) {
    return del(`/account/${id}`);
  },
};

export const Role = {
  getPageList(params: any) {
    return get(`/role${tool.genParamString(params)}`);
  },
  create(data: unknown) {
    return post('/role', data);
  },
  edit(id: any, data: unknown) {
    return patch(`/role/${id}`, data);
  },
  deleteRole(id: any) {
    return del(`/role/${id}`);
  },
};
