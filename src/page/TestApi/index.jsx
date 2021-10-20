import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { get } from '@/utils/axios';
export default () => {
  const [value, setValue] = useState('/v1/account');
  const [res, setRes] = useState();
  const handdleClick = async () => {
    const data = await get(value);
    setRes(JSON.stringify(data, 0, 2));
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
      <pre>{res}</pre>
    </>
  );
};
