import { Button } from 'antd';
import { FC, useEffect, useRef, useState } from 'react';

const Play9: FC = () => {
  const ref = useRef(0);
  const [a, setA] = useState(0);
  ref.current = ref.current + 1;
  useEffect(() => {
    console.log('change');
  }, [ref.current]);
  return <div >
    <h1>useRef 的问题</h1>
    <div>
      <Button onClick={() => { setA(a + 1); console.log(ref.current); }}>demo</Button>
    </div>

    {ref.current}
  </div>;
};

export default Play9;
