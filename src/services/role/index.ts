import type { ResponeData } from '@/services';
import { tool } from '@/utils';
import { del, get, patch, post } from '@/utils/axios';

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
