import { useWinBox } from '@/components/WinBox';
import Background from '@/components/Background';
import MessageProvider, { message } from '@/components/Message';
import { useEffect, useState } from 'react';
import cat from '@/assets/img/cat.jpg';

import Highlight, { defaultProps } from 'prism-react-renderer';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;
const B = ({ wb }) => {
  console.log(wb);
  return (
    <Highlight {...defaultProps} code={exampleCode} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const A = ({ wb, setY }) => {
  console.log(wb);
  const [x, setX] = useState(1);
  return (
    <button
      style={{ margin: '100px' }}
      onClick={() => {
        setX(x + 1);
        setY(x + 1);
        message.success(
          <div>
            <b>Awesome!</b>
            <div>Isn't it?</div>
          </div>
        );
      }}
    >
      点击我：{x}
    </button>
  );
};

export default function App() {
  let winbox = useWinBox();
  const [y, setY] = useState(1);
  return (
    <div>
      {y}
      <button
        onClick={() => {
          winbox.open({ children: <A setY={setY} /> });
        }}
      >
        新建A
      </button>
      <button
        onClick={() => {
          winbox.open({ children: <B /> });
        }}
      >
        新建B
      </button>
    </div>
  );
}
