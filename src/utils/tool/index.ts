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

  /**
   * 获取随机数
   * @example
   * randomInt(10) //0-10
   * randomInt(-10,10) //-10-10
   */
  randomInt: (
    min: number,
    max?: number,
    cb?: (err: Error | null, n?: number) => void,
  ) => number;
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

  randomInt(min, max, cb) {
    if (typeof min === 'number' && typeof max === 'number') {
      [min, max] = [max, min];
    }

    if (max === undefined) {
      max = 0;
    } else if (typeof max === 'function') {
      cb = max;
      max = 0;
    }

    if (
      !Number.isSafeInteger(max) ||
      (typeof min === 'number' && !Number.isSafeInteger(min))
    ) {
      throw new Error('max or min is not a Safe Number');
    }

    if (min - max > Math.pow(2, 48)) {
      throw new RangeError('max - min should be less than 2^48!');
    }

    if (max >= min) {
      throw new Error('Min is bigger than Max!');
    }

    const randomBuffer = new Uint32Array(1);

    crypto.getRandomValues(randomBuffer);

    const randomNumber = randomBuffer[0] / (0xffffffff + 1);

    max = Math.ceil(max);
    min = Math.floor(min);

    const result = Math.floor(randomNumber * (min - max + 1)) + max;

    if (cb) {
      cb(null, result);
    }

    return result;
  },
};
