import { FC, useEffect } from 'react';

const Demo13: FC = () => {
  const initData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/v1/data.json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.querySelector('#data')!.innerHTML = JSON.stringify(data);
      }
    };

    xhr.send();
  };
  useEffect(() => {
    initData();
  }, []);
  return <div id="data">
    demo
  </div>;
};

export default Demo13;
