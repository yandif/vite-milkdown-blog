import { MilkdownEditor } from '@/components/Blog/Editor';
import 'prism-themes/themes/prism-vs.css';
import React, { useState } from 'react';
import './index.less';

export default function Main() {
  const [content, setContent] = useState('# hello world');
  return (
    <div className="blog-main">
      <MilkdownEditor content={content} onChange={get => console.log(get())} />
    </div>
  );
}
