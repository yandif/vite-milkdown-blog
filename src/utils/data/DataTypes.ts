/**
 * 数据类型判断
 * @example
 * new DataTypes("stirng").isString
 * //returns true
 */
export class DataTypes {
  value: any;
  string: string;
  constructor(value?: any) {
    this.value = value;
    this.string = Object.prototype.toString.call(value);
  }

  /**
   * 判断是否是字符串类型
   */
  get isString() {
    return this.string === '[object String]';
  }

  /**
   * 判断是否是数字类型
   */
  get isNumber() {
    return this.string === '[object Number]';
  }

  /**
   * 判断是否是布尔类型
   */
  get isBoolean() {
    return this.string === '[object Boolean]';
  }

  /**
   * 判断是否是Synbol类型
   */
  get isSymbol() {
    return this.string === '[object Symbol]';
  }

  /**
   * 判断是否是Undefined类型
   */
  get isUndefined() {
    return this.string === '[object Undefined]';
  }

  /**
   * 判断是否是Null类型
   */
  get isNull() {
    return this.string === '[object Null]';
  }

  /**
   * 判断是否是数组类型
   */
  get isArray() {
    return this.string === '[object Array]';
  }

  /**
   * 判断是否是对象类型
   */
  get isObject() {
    return this.string === '[object Object]';
  }

  /**
   * 判断是否是函数类型
   */
  get isFunction() {
    return this.string === '[object Function]';
  }

  /**
   * 判断是否是日期类型
   */
  get isDate() {
    return this.string === '[object Date]';
  }

  /**
   * 判断是否是正则类型
   */
  get isRegExp() {
    return this.string === '[object RegExp]';
  }

  /**
   * 判断是否是错误类型
   */
  get isError() {
    return this.string === '[object Error]';
  }
}
