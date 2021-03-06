import { tool } from '@/utils';
import { del, get, patch, post } from '@/utils/axios';

export type ResponeData = {
  /**
   * 返回的数据
   */
  data: any;
  /**
   * 状态码:0成功； 1失败；
   */
  code: number;
  /**
   * 消息
   */
  message: string;
};

export const Role = {
  getPageList(params: { [key: string]: any }): Promise<ResponeData> {
    return get(`/role${tool.genParamString(params)}`);
  },
  create(data: any): Promise<ResponeData> {
    return post('/role', data);
  },
  edit(id: any, data: any): Promise<ResponeData> {
    return patch(`/role/${id}`, data);
  },
  deleteRole(id: any): Promise<ResponeData> {
    return del(`/role/${id}`);
  },
};

export const Menu = {
  getPageList(params: { [key: string]: any }): Promise<ResponeData> {
    return get(`/role${tool.genParamString(params)}`);
  },
  create(data: any): Promise<ResponeData> {
    return post('/role', data);
  },
  edit(id: any, data: any): Promise<ResponeData> {
    return patch(`/role/${id}`, data);
  },
  deleteRole(id: any): Promise<ResponeData> {
    return del(`/role/${id}`);
  },
};

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
