import 'vditor/dist/index.css';

import { useEffect, useState } from 'react';
import Vditor from 'vditor';

const App = () => {
  const [vd, setVd] = useState<Vditor>();
  useEffect(() => {
    const vditor = new Vditor('vditor', {
      after: () => {
        vditor.setValue('`Vditor` 最小代码示例');
        setVd(vditor);
        console.log(vd);
      }
    });

  }, []);
  return <div id="vditor" className="vditor" />;
};

export default App;
