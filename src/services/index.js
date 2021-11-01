import { get, post } from '@/utils/axios';

export const Account = {
  Login(data) {
    return post('/login', data);
  },
};
