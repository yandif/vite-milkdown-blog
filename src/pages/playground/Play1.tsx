import { Switch } from 'antd';
import { FC, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

let i = 0;
const Play1: FC = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [checked, setChecked] = useState(false);
  const ref = useRef(0);
  ref.current++;
  useEffect(() => {
    if (checked) {
      const timer = setInterval(() => nav('?i=' + i++), 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [location, checked]);

  return (
    <div>
      <h1> 试一下react-router-dom v6 的 useLocation,useNavigate</h1>
      {ref.current}
      {JSON.stringify(checked)}
      <div>
        <button onClick={() => {
          setChecked(true);
          setChecked(false);
        }}>点击</button>
        <Switch size="small" checked={checked} onChange={(v) => {
          setChecked(v);
        }} />
        <Switch />
        <Switch disabled />
        <h3>useLocation</h3>
        <pre>
          {JSON.stringify(location, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Play1;
