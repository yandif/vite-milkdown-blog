import { EngineInterface } from '@aomao/engine';
import DefaultToolbar, { GroupItemProps } from '@aomao/toolbar';
import { FC } from 'react';

const defaultItems: GroupItemProps[] = [
  ['collapse'],
  ['undo', 'redo', 'paintformat', 'removeformat'],
  ['heading', 'fontfamily', 'fontsize'],
  ['bold', 'italic', 'strikethrough', 'underline', 'moremark'],
  ['fontcolor', 'backcolor'],
  ['alignment'],
  ['unorderedlist', 'orderedlist', 'tasklist', 'indent', 'line-height'],
  ['link', 'quote', 'hr'],
];

const Toolbar: FC<{
  engine?: EngineInterface;
  items?: GroupItemProps[];
}> = ({ engine, items = defaultItems, ...restProps }) => {
  return engine ? (
    <DefaultToolbar
      engine={engine}
      items={items}
      {...restProps}
    />
  ) : null;
};

export default Toolbar;
