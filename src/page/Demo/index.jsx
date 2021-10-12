import MyAnime from '@/components/Demo/Anime';
import Comparison from '@/components/Demo/Comparison';
import Message from '@/components/Demo/Message';
import MobxDemo from '@/components/Demo/Mobx';
import Empty from '@/components/Demo/Empty';

import React from 'react';
import className from './index.module.css';

const Space = () => <div className={className.space}></div>;

export default function Demo() {
  return (
    <div className={className.demo}>
      <Space />
      <Comparison oldImg="/img/1.png" newImg="/img/2.png" />
      <Space />
      <MyAnime />
      <Space />
      <Message />
      <Space />
      <MobxDemo />
      <Space />
      <Empty />
    </div>
  );
}
