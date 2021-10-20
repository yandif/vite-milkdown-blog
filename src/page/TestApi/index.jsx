import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { get } from '@/utils/axios';
export default () => {
  const [value, setValue] = useState('/v1/account');
  const handdleClick = async () => {
    await get(value)
  };
  return (
    <>
      <Button type="primary" onClick={handdleClick}>
        发送请求
      </Button>
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};
