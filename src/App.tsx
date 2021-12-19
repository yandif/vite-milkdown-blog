import { inject, observer } from 'mobx-react';
import { useMount } from 'react-use';
import { TOKEN } from './constant';

const App = (props) => {
  const {
    AppStore: {
      data: { isLoading },
      setIsLoading
    },
    AdminStore: { data, setCurrentUser }
  } = props;

  useMount(() => initApp());
  const initApp = async () => {
    // 1.获取token
    const token = localStorage.getItem(TOKEN);

    // 2.如果token不存在，把当前用户置空
    if (!token) {
      return setCurrentUser(null);
    }

    // 3.token存在,根据token获取用户信息。
    try {
      //
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      
    } catch (e) {
      //
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <h1>
      {JSON.stringify(isLoading)}
      <br />
      1123
      {JSON.stringify(data)}
    </h1>
  );
};

export default inject('AdminStore', 'AppStore')(observer(App));

// import { message } from '@/components/Message';
// import { useWinBox } from '@/components/WinBox';
// import { Button } from 'antd';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// import { useState } from 'react';

// const exampleCode = `
// (function someDemo() {
//   var test = "Hello World!";
//   console.log(test);
// })();

// return () => <App />;
// `;

// const B = ({ wb }) => {
//   console.log(wb);
//   return (
//     <Highlight {...defaultProps} code={exampleCode} language="jsx">
//       {({ className, style, tokens, getLineProps, getTokenProps }) => (
//         <pre className={className} style={style}>
//           {tokens.map((line, i) => (
//             <div key={i} {...getLineProps({ line, key: i })}>
//               {line.map((token, key) => (
//                 <span key={key} {...getTokenProps({ token, key })} />
//               ))}
//             </div>
//           ))}
//         </pre>
//       )}
//     </Highlight>
//   );
// };

// const A = ({ wb, setY }) => {
//   console.log(wb);
//   const [x, setX] = useState(1);
//   return (
//     <button
//       style={{ margin: '100px' }}
//       onClick={() => {
//         setX(x + 1);
//         setY(x + 1);
//         message.success(
//           <div>
//             <b>Awesome!</b>
//             <div>Isn&apos;t it?</div>
//           </div>
//         );
//       }}
//     >
//       点击我：{x}
//     </button>
//   );
// };

// export default function App() {
//   const winbox = useWinBox();
//   const [y, setY] = useState(1);
//   return (
//     <div>
//       {y}
//       <Button
//         type="primary"
//         onClick={() => {
//           winbox.open({ children: <A setY={setY} /> });
//         }}
//       >
//         新建A
//       </Button>
//       <Button
//         onClick={() => {
//           winbox.open({ children: <B /> });
//         }}
//       >
//         新建B
//       </Button>
//     </div>
//   );
// }
