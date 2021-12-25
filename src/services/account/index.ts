import type { ResponeData } from '@/services';
import { tool } from '@/utils';
import { del, get, patch, post } from '@/utils/axios';

export const Account = {
  Login(data: { username: any; password: any }): Promise<ResponeData> {
    return post('/login', data);
  },
  getMenus(): Promise<ResponeData> {
    return get('/menus');
  },
  getUserInfo(): Promise<ResponeData> {
    return get('/account/me');
  },
  getPageList(params: { [key: string]: any }): Promise<ResponeData> {
    return get(`/account${tool.genParamString(params)}`);
  },
  createUser(data: any): Promise<ResponeData> {
    return post('/account', data);
  },
  editUser(id: any, data: any): Promise<ResponeData> {
    return patch(`/account/${id}`, data);
  },
  deleteUser(id: any): Promise<ResponeData> {
    return del(`/account/${id}`);
  },
};
