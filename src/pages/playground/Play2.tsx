import { FC, useState } from 'react';

import { Editor } from '@/components/Editor';

const Play2: FC = () => {
  const [data, setData] = useState('');

  return <div>
    <h1> am-editor富文本</h1>
    <Editor onChange={setData} showToolBar />
  </div>;
};

export default Play2;
