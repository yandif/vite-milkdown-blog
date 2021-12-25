import { DataTypes } from '@/utils/data/DataTypes';

export const tool: {
  /**
   * 简单的加密
   */
  compile: (code: string) => string;

  /**
   * 简单的解密
   */
  uncompile: (code: string) => string;

  /**
   * 获取数据类型
   */
  getType: (value: any) => DataTypes;

  /**
   * 根据对象获取url参数字符串
   * @example
   * genParamString({ name: "yandif", love: "cat" });
   * //returns '?name=yandif&love=cat'
   */
  genParamString: (obj: { [key: string]: string }) => string;

  /**
   * 校验是否是手机号码
   */
  checkPhone: (pnone: string | number) => boolean;

  /**
   * 校验是否是邮箱
   */
  checkEmail: (pnone: string) => boolean;
} = {
  getType(value: any) {
    return new DataTypes(value);
  },

  compile(code) {
    let c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (let i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return c;
  },

  uncompile(code) {
    let c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (let i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
  },

  genParamString(obj) {
    if (!obj) return '';

    const search = new URLSearchParams();
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      !!value && search.append(key, value);
    });
    const searchString = search.toString();
    return searchString.length > 0 ? `?${searchString}` : '';
  },

  checkPhone(phone) {
    const rex = /^1[34578]\d{9}$/;
    return rex.test(String(phone));
  },

  checkEmail(email) {
    const rex =
      /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    return rex.test(email);
  },
};
