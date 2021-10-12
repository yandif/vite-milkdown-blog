import { message } from '@/components/Message';
import React from 'react';

const Message = () => {
  return (
    <div>
      <button onClick={() => message.success('成功')}>成功</button>
      <button onClick={() => message.error('失败')}>失败</button>
      <button onClick={() => message.custom('用户')}>用户</button>
      <button
        onClick={() => {
          const id = message.loading('加载中');
          setTimeout(() => {
            message.dismiss(id);
          }, 1000);
        }}
      >
        加载中
      </button>
    </div>
  );
};

export default Message;
