import { FC, useEffect } from 'react';

function useTest() {
  useEffect(() => {
    console.log(123);
  }, []);
}

const Demo = () => {
  useTest();

  return <div>demo</div>;
};

const Play5: FC = () => {
  useTest();

  return <div>
    <h1>试一下 react hooks</h1>
    <Demo />
    <Demo />
  </div>;
};

export default Play5;
