import { FC, useState } from 'react';

import { Editor, View } from '@/components/Editor';

const Play2: FC = () => {
  const [data, setData] = useState('');

  return <div>
    <Editor onChange={setData} showToolBar />
    {/* <Editor onChange={setData} /> */}
    {/* <div className="editor-wrapper">
      <div className="editor-container">
        <div className="editor-content" >
          <View content={data}></View>
        </div>
      </div>
    </div> */}
  </div>;
};

export default Play2;
