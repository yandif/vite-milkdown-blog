export * from './account';
export * from './role';

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
