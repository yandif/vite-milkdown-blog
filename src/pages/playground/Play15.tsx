import { observer } from 'mobx-react-lite';
import React from 'react';

import { MilkdownEditor } from '@/components/EditorMilkdown';
function Editor() {
  return <MilkdownEditor />;
}

export default observer(Editor);
