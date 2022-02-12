//引入插件 begin
import 'antd/es/empty/style';

import Alignment from '@aomao/plugin-alignment';
import Backcolor from '@aomao/plugin-backcolor';
import Bold from '@aomao/plugin-bold';
import Code from '@aomao/plugin-code';
import Codeblock, { CodeBlockComponent } from '@aomao/plugin-codeblock';
import File, { FileComponent, FileUploader } from '@aomao/plugin-file';
import Fontcolor from '@aomao/plugin-fontcolor';
import Fontfamily from '@aomao/plugin-fontfamily';
import Fontsize from '@aomao/plugin-fontsize';
import Heading from '@aomao/plugin-heading';
import Hr, { HrComponent } from '@aomao/plugin-hr';
import Image, { ImageComponent, ImageUploader } from '@aomao/plugin-image';
import Indent from '@aomao/plugin-indent';
import Italic from '@aomao/plugin-italic';
import LineHeight from '@aomao/plugin-line-height';
import Link from '@aomao/plugin-link';
import Mark from '@aomao/plugin-mark';
import MarkRange from '@aomao/plugin-mark-range';
import MathPlugin, { MathComponent } from '@aomao/plugin-math';
import Mention, { MentionComponent } from '@aomao/plugin-mention';
import Orderedlist from '@aomao/plugin-orderedlist';
import PaintFormat from '@aomao/plugin-paintformat';
import Quote from '@aomao/plugin-quote';
import Redo from '@aomao/plugin-redo';
import RemoveFormat from '@aomao/plugin-removeformat';
import SelectAll from '@aomao/plugin-selectall';
import Status, { StatusComponent } from '@aomao/plugin-status';
import Strikethrough from '@aomao/plugin-strikethrough';
import Sub from '@aomao/plugin-sub';
import Sup from '@aomao/plugin-sup';
import Table, { TableComponent } from '@aomao/plugin-table';
import Tasklist, { CheckboxComponent } from '@aomao/plugin-tasklist';
import Underline from '@aomao/plugin-underline';
import Undo from '@aomao/plugin-undo';
import Unorderedlist from '@aomao/plugin-unorderedlist';
import Video, { VideoComponent, VideoUploader } from '@aomao/plugin-video';
import {
  fontFamilyDefaultData,
  ToolbarComponent,
  ToolbarPlugin,
} from '@aomao/toolbar';

const DOMAIN = '/api';

export const plugins = [
  Redo,
  Undo,
  Bold,
  Code,
  Backcolor,
  Fontcolor,
  Fontsize,
  Italic,
  Underline,
  Hr,
  Tasklist,
  Orderedlist,
  Unorderedlist,
  Indent,
  Heading,
  Strikethrough,
  Sub,
  Sup,
  Alignment,
  Mark,
  Quote,
  PaintFormat,
  RemoveFormat,
  SelectAll,
  Link,
  Codeblock,
  Image,
  ImageUploader,
  Table,
  MarkRange,
  File,
  FileUploader,
  Video,
  VideoUploader,
  MathPlugin,
  ToolbarPlugin,
  Fontfamily,
  Status,
  LineHeight,
  Mention,

  // Test,
  //Mind
];

export const cards = [
  HrComponent,
  CheckboxComponent,
  CodeBlockComponent,
  ImageComponent,
  TableComponent,
  FileComponent,
  VideoComponent,
  MathComponent,
  ToolbarComponent,
  StatusComponent,
  MentionComponent,
  // TestComponent,
  //MindComponent
];

export const pluginConfig = {
  [ToolbarPlugin.pluginName]: {
    popup: {
      items: [
        ['bold', 'strikethrough', 'fontcolor'],
        {
          icon: 'text',
          items: ['italic', 'underline', 'backcolor', 'moremark'],
        },
        [
          {
            type: 'button',
            name: 'image-uploader',
            icon: 'image',
          },
          'link',
          'tasklist',
          'heading',
        ],
        {
          icon: 'more',
          items: [
            {
              type: 'button',
              name: 'video-uploader',
              icon: 'video',
            },
            {
              type: 'button',
              name: 'file-uploader',
              icon: 'attachment',
            },
            {
              type: 'button',
              name: 'table',
              icon: 'table',
            },
            {
              type: 'button',
              name: 'math',
              icon: 'math',
            },
            {
              type: 'button',
              name: 'codeblock',
              icon: 'codeblock',
            },
            {
              type: 'button',
              name: 'orderedlist',
              icon: 'ordered-list',
            },
            {
              type: 'button',
              name: 'unordered-list',
              icon: 'unordered-list',
            },
            {
              type: 'button',
              name: 'hr',
              icon: 'hr',
            },
            {
              type: 'button',
              name: 'quote',
              icon: 'quote',
            },
          ],
        },
      ],
    },
  },
  [MarkRange.pluginName]: {
    //标记类型集合
    keys: ['comment', 'toolbar'],
  },
  [Italic.pluginName]: {
    // 默认为 _ 下划线，这里修改为单个 * 号
    markdown: '*',
  },
  [Image.pluginName]: {
    onBeforeRender: (_status: any, url: string) => {
      if (!url) return url;
      return url + '?token=12323';
    },
  },
  [ImageUploader.pluginName]: {
    file: {
      action: `${DOMAIN}/utils/upload`,
    },
    parse: (response: { status: any; data: any }) => {
      return {
        result: response.status,
        data: response.data,
      };
    },
  },
  [FileUploader.pluginName]: {
    action: `${DOMAIN}/utils/upload`,
    parse: (response: { status: any; data: any }) => {
      return {
        result: response.status,
        data: {
          url: response.data,
        },
      };
    },
  },
  [VideoUploader.pluginName]: {
    file: {
      action: `${DOMAIN}/utils/upload`,
    },
    parse: (response: { status: any; data: any }) => {
      return {
        result: response.status,
        data: response.data,
      };
    },
    limitSize: 1024 * 1024 * 50,
  },
  [Video.pluginName]: {
    onBeforeRender: (_status: any, url: string) => {
      return url + '?token=12323';
    },
  },
  [MathPlugin.pluginName]: {
    action: 'https://g.aomao.com/latex',
    parse: (res: any) => {
      if (res.success) return { result: true, data: res.svg };
      return { result: false };
    },
  },
  [Fontsize.pluginName]: {
    //配置粘贴后需要过滤的字体大小
    filter: (fontSize: string) => {
      return (
        [
          '12px',
          '13px',
          '14px',
          '15px',
          '16px',
          '19px',
          '22px',
          '24px',
          '29px',
          '32px',
          '40px',
          '48px',
        ].indexOf(fontSize) > -1
      );
    },
  },
  [Fontfamily.pluginName]: {
    //配置粘贴后需要过滤的字体
    filter: (fontfamily: string) => {
      const item = fontFamilyDefaultData.find((item) =>
        fontfamily
          .split(',')
          .some(
            (name: string) =>
              item.value
                .toLowerCase()
                .indexOf(name.replace(/"/, '').toLowerCase()) > -1,
          ),
      );
      return item ? item.value : false;
    },
  },
  [LineHeight.pluginName]: {
    //配置粘贴后需要过滤的行高
    filter: (lineHeight: string) => {
      if (lineHeight === '14px') return '1';
      if (lineHeight === '16px') return '1.15';
      if (lineHeight === '21px') return '1.5';
      if (lineHeight === '28px') return '2';
      if (lineHeight === '35px') return '2.5';
      if (lineHeight === '42px') return '3';
      // 不满足条件就移除掉
      return ['1', '1.15', '1.5', '2', '2.5', '3'].indexOf(lineHeight) > -1;
    },
  },
};
