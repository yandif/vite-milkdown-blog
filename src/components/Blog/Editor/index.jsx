import React from 'react';
import { defaultValueCtx, Editor, editorViewOptionsCtx, themeFactory } from '@milkdown/core';
import { ReactEditor, useEditor } from '@milkdown/react';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { gfm } from '@milkdown/preset-gfm';
import { math } from '@milkdown/plugin-math';
import { history } from '@milkdown/plugin-history';
import { prism } from '@milkdown/plugin-prism';
import { tooltip } from '@milkdown/plugin-tooltip';
import { slash } from '@milkdown/plugin-slash';
import { cursor } from '@milkdown/plugin-cursor';
import { clipboard } from '@milkdown/plugin-clipboard';
import { emoji } from '@milkdown/plugin-emoji';

export const MilkdownEditor = ({ content, readOnly, onChange }) => {
  const editor = useEditor(
    root => {
      const editor = new Editor()
        .config(ctx => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, content);
          ctx.set(editorViewOptionsCtx, { editable: () => !readOnly });
          ctx.set(listenerCtx, { markdown: onChange ? [onChange] : [], doc: [console.log] });
        })
        .use(commonmark)
        .use(themeFactory({}))
        .use(listener)
        .use(clipboard) // 粘贴板
        .use(history) // 取消、重做
        .use(emoji) // emoji表情
        .use(cursor())
        .use(prism)
        .use(tooltip)
        .use(math);

      if (!readOnly) {
        editor.use(slash);
      }
      return editor;
    },
    [readOnly, content]
  );

  return <ReactEditor editor={editor} />;
};
