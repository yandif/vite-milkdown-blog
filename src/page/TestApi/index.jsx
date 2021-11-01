import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { get } from '@/utils/axios';
export default () => {
  const [value, setValue] = useState();
  const [res, setRes] = useState();
  const valueMap = {
    帐号: '/account',
    资源: '/access',
    角色: '/role',
  };
  const buttons = [];
  for (const key in valueMap) {
    if (Object.hasOwnProperty.call(valueMap, key)) {
      const value = valueMap[key];
      buttons.push(
        <Button
          type="primary"
          style={{ marginRight: '2px', marginLeft: '2px' }}
          onClick={() => {
            setValue(value);
          }}
        >
          {key}
        </Button>
      );
    }
  }
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#eee',
        paddingTop: '24px',
        overflow: 'auto',
      }}
    >
      <div style={{ width: '500px', margin: 'auto' }}>
        {buttons}
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '24px' }}>
          <Input
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
          <Button
            type="primary"
            onClick={async () => {
              const data = await get(value);
              setRes(JSON.stringify(data, 0, 2));
            }}
          >
            Get
          </Button>
        </div>
        <pre style={{ fontSize: 20, fontWeight: 'bold' }}>{res}</pre>
      </div>
    </div>
  );
};

let emoji = {
  success: true,
  d: [
    '· - ·',
    '(๑•̀ㅂ•́)و✧',
    '(╯>▽<)╯~╩╩',
    'o(*///▽///*)o',
    '（￣▽￣）',
    '(/^▽^)/',
    '✽-(ˆ▽ˆ)/✽✽\\(ˆ▽ˆ)-✽ ',
    ' ♥(✽´∀`✽)ﾉ ',
    '٩(๑>◡<๑)۶',
    '(〜￣△￣)〜',
    'ε=ε=(ノ≧∇≦)ノ',
    '✧(∗≧ꇴ≦)人(≧ꈊ≦∗)✧',
    '◟(∗˙ ꒵ ˙∗)◞✧',
    '(⌒▽⌒)',
    'XD',
    ':)',
    '˙🐽˙ ',
    ':(',
    'T^T',
    'Orz',
    '(ಥ_ಥ)',
    '(´༎ຶД༎ຶ`)﻿',
    '(｡•ˇ‸ˇ•｡)',
    '(･∀･)',
    '(^・ω・^ )',
    '(=・ω・=)',
    '(｀・ω・´)',
    ' (`皿´) ',
    '(σ｀д′)σ',
    '╮(￣▽￣)╭',
    '_(:з」∠)_',
    '(￣.￣)',
    '(‧ ‧)',
    '(ーー゛)',
    '￣ω￣=',
    '(●￣(ｴ)￣●)',
    '(･ェ･。)',
    'ヽ(･ω･´ﾒ)',
    'Σ( ⚆൧⚆)',
    '(╯°□°）╯︵┻━┻',
    '(╯> <)╯~╩╩',
    '乂(ﾟДﾟ三ﾟДﾟ)乂 ',
    '(¬_¬)',
    '⊙﹏⊙|||',
    '(⊙o⊙)',
    '(O_o)???',
    '(黑人)???',
    '(´థ౪థ）σ',
    '←_←',
    '→_→',
    '↑_↑',
    '↓-↓',
    '→_←',
  ],
};
let today = {
  success: true,
  d: {
    update: [
      {
        mmid: 'e15',
        id: 694,
        noticeably_updated_at: '2021-10-18 21:33:02',
        title:
          '\u8fd9\u4e24\u5e74\u5e72\u561b\u53bb\u4e86\uff1b\u7f51\u7ad9\u51fa\u4e86\u4e0d\u80fd\u58f0\u5f20\u7684Bug\uff1b\u641e\u4e8b\u60c5',
        desc: null,
        updated_at: '2021-10-18 23:13:49',
        cover_file_id: 1912,
        mid: '15',
        parent_mid: null,
        iname: 'post',
        cover_url: 'https://cdn.biaoyansu.com/4TnsscOWLYcBKLfl62RqJVFWyKkKlgVjDqTT39ZL.png.png',
        r_parent_only_cover: null,
      },
    ],
  },
};

let listAll = {
  success: true,
  d: {
    278: {
      mmid: '28.x',
      id: 278,
      mid: '28',
      title: '\u8868\u4e25\u8083\u8bb2\u6b63\u5219\u8868\u8fbe\u5f0f',
      t: 'course',
      created_at: '2018-01-11 07:45:08',
      iname: 'post',
      cover_url: null,
    },
    266: {
      mmid: '27.x',
      id: 266,
      mid: '27',
      title: '\u8868\u4e25\u8083\u8bb2Git',
      t: 'course',
      created_at: '2017-12-24 14:54:18',
      iname: 'post',
      cover_url: null,
    },
    170: {
      mmid: '21.x',
      id: 170,
      mid: '21',
      title: 'Webpack\u6838\u5fc3 - \u8868\u4e25\u8083\u8bb2Webpack',
      t: 'course',
      created_at: '2017-09-05 21:40:46',
      iname: 'post',
      cover_url: null,
    },
    160: {
      mmid: '20.x',
      id: 160,
      mid: '20',
      title: 'npm\u706b\u901f\u4e0a\u624b - \u8868\u4e25\u8083\u8bb2npm',
      t: 'course',
      created_at: '2017-08-26 03:57:35',
      iname: 'post',
      cover_url: null,
    },
    119: {
      mmid: '17.x',
      id: 119,
      mid: '17',
      title:
        'jQuery\u4e09\u6b65\u641e\u5b9a\u8868\u5355\u9a8c\u8bc1 - \u8868\u4e25\u8083jQuery\u5b9e\u6218',
      t: 'course',
      created_at: '2017-07-22 18:25:38',
      iname: 'post',
      cover_url: null,
    },
    107: {
      mmid: '16.x',
      id: 107,
      mid: '16',
      title: '\u73a9\u8f6cJQuery - \u8868\u4e25\u8083\u8bb2JQuery',
      t: 'course',
      created_at: '2017-05-31 18:48:11',
      iname: 'post',
      cover_url: null,
    },
    95: {
      mmid: '15.x',
      id: 95,
      mid: '15',
      title: 'Bootstrap\u65b0\u95fb\u7ad9\u5f00\u53d1 - Bootstrap\u5b9e\u6218',
      t: 'course',
      created_at: '2017-05-27 10:55:22',
      iname: 'post',
      cover_url: null,
    },
    84: {
      mmid: '14.x',
      id: 84,
      mid: '14',
      title: '\u73a9\u8f6cBootstrap - \u8868\u4e25\u8083\u8bb2Bootstrap',
      t: 'course',
      created_at: '2017-05-27 10:42:42',
      iname: 'post',
      cover_url: null,
    },
    78: {
      mmid: '13.x',
      id: 78,
      mid: '13',
      title:
        '\u54cd\u5e94\u5f0f\u5e03\u5c40\u5230\u5e95\u600e\u4e48\u73a9\uff1f- \u8868\u4e25\u8083\u8bb2\u54cd\u5e94\u5f0f\u5e03\u5c40',
      t: 'course',
      created_at: '2017-05-27 10:34:23',
      iname: 'post',
      cover_url: null,
    },
    63: {
      mmid: '12.x',
      id: 63,
      mid: '12',
      title: 'JavaScript\u7cbe\u8bb2 - \u8868\u4e25\u8083\u8bb2JavaScript',
      t: 'course',
      created_at: '2017-05-27 10:11:32',
      iname: 'post',
      cover_url: null,
    },
    57: {
      mmid: '11.x',
      id: 57,
      mid: '11',
      title: '\u7535\u5546\u7ad9\u9996\u9875\u5e03\u5c40 - \u8868\u4e25\u8083HTML&CSS\u5b9e\u6218',
      t: 'course',
      created_at: '2017-05-27 10:06:42',
      iname: 'post',
      cover_url: null,
    },
    50: {
      mmid: '10.x',
      id: 50,
      mid: '10',
      title: '\u6781\u7b80\u535a\u5ba2\u5f00\u53d1 - \u8868\u4e25\u8083HTML&CSS\u5b9e\u6218',
      t: 'course',
      created_at: '2017-05-27 09:44:17',
      iname: 'post',
      cover_url: null,
    },
    34: {
      mmid: '9.x',
      id: 34,
      mid: '9',
      title: 'CSS\u706b\u901f\u5165\u95e8 - \u8868\u4e25\u8083\u8bb2CSS',
      t: 'course',
      created_at: '2017-05-27 09:21:03',
      iname: 'post',
      cover_url: null,
    },
    29: {
      mmid: '8.x',
      id: 29,
      mid: '8',
      title: 'TypeScript\u7cbe\u8bb2 - \u8868\u4e25\u8083\u8bb2TypeScript',
      t: 'course',
      created_at: '2017-05-25 20:45:15',
      iname: 'post',
      cover_url: null,
    },
    18: {
      mmid: '7.x',
      id: 18,
      mid: '7',
      title: 'ES6\u7cbe\u8bb2 - \u8868\u4e25\u8083\u8bb2ES6',
      t: 'course',
      created_at: '2017-05-25 19:59:02',
      iname: 'post',
      cover_url: null,
    },
    1: {
      mmid: '6.x',
      id: 1,
      mid: '6',
      title: 'HTML\u7cbe\u8bb2 - \u8868\u4e25\u8083\u8bb2HTML',
      t: 'course',
      created_at: '2017-05-25 06:58:03',
      iname: 'post',
      cover_url: null,
    },
  },
};
let comment = {
  success: true,
  d: {
    4714: {
      id: 4714,
      content: '\u597d\u4eba',
      created_at: '2021-10-21 18:52:11',
      updated_at: '2021-10-21 18:52:11',
      iid: 388,
      iname: 'post',
      reply_to: 4713,
      t: 'comment',
      s: 'ok',
      user_id: 8356,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 8356,
        uname: 'xingchen',
        nickname: '\u661f\u8fb0',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: {
        id: 4713,
        content: '\u597d\u4eba',
        t: 'comment',
        s: 'ok',
        user_id: 8356,
        created_at: '2021-10-21 18:51:42',
        ins: null,
        downvoted_by_him: false,
        upvoted_by_him: false,
        r_user: {
          id: 8356,
          uname: 'xingchen',
          nickname: '\u661f\u8fb0',
          t: ['regular'],
          promote_child_discount_duration_in_year: 0,
        },
      },
      r_upvoted_user: [],
    },
    4713: {
      id: 4713,
      content: '\u597d\u4eba',
      created_at: '2021-10-21 18:51:42',
      updated_at: '2021-10-21 18:51:42',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 8356,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 8356,
        uname: 'xingchen',
        nickname: '\u661f\u8fb0',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    4710: {
      id: 4710,
      content: '\u514d\u8d39\u8fbd\u0669(\u0e51>\u25e1<\u0e51)\u06f6',
      created_at: '2021-10-21 11:25:05',
      updated_at: '2021-10-21 11:25:05',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 15104,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 15104,
        uname: '65930215104131',
        nickname: '\u963f\u5927\u996d',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    4703: {
      id: 4703,
      content: '```\nyo.\n```',
      created_at: '2021-10-19 21:25:37',
      updated_at: '2021-10-19 21:25:37',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 3481,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 3481,
        uname: '6593023481131',
        nickname: '\u61d2\u60f0\u7684\u6211',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    4681: {
      id: 4681,
      content:
        '\u4e24\u5e74\u8fc7\u53bb\u4e86\uff0c\u56de\u6765\u4e00\u770b\u514d\u8d39\u4e86\uff0c\u8868\u54e5\u771f\u7684\u5927\u5584\u4eba',
      created_at: '2021-10-07 23:32:13',
      updated_at: '2021-10-07 23:32:13',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 15199,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 15199,
        uname: '65930215199131',
        nickname: 'qiu745',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    4082: {
      id: 4082,
      content: '1800\u964d\u4ef7\u5566\uff0c\u7136\u800c\u6ca1\u5de5\u4f5c\u4e70\u4e0d\u8d770.0',
      created_at: '2019-09-10 15:05:40',
      updated_at: '2019-09-10 15:05:40',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 12914,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12914,
        uname: '65930212914131',
        nickname: '\u9171\u6cb9\u53f7\u5440',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    4029: {
      id: 4029,
      content: '\u67e5\u8be2',
      created_at: '2019-08-06 22:41:06',
      updated_at: '2019-08-06 22:41:06',
      iid: 388,
      iname: 'post',
      reply_to: 4028,
      t: 'comment',
      s: 'ok',
      user_id: 12567,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12567,
        uname: '65930212567131',
        nickname: 'rom',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: {
        id: 4028,
        content: '\u597d\u7279\u4e48\u8d35\u554a',
        t: 'comment',
        s: 'folded',
        user_id: 12567,
        created_at: '2019-08-06 22:40:37',
        ins: null,
        downvoted_by_him: false,
        upvoted_by_him: false,
        r_user: {
          id: 12567,
          uname: '65930212567131',
          nickname: 'rom',
          t: ['regular'],
          promote_child_discount_duration_in_year: 0,
        },
      },
      r_upvoted_user: [],
    },
    4022: {
      id: 4022,
      content: '\u4e70\u4e0d\u8d77\u0669(\u0e51>\u25e1<\u0e51)\u06f6',
      created_at: '2019-08-06 14:20:53',
      updated_at: '2019-08-06 14:20:53',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 12557,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12557,
        uname: '65930212557131',
        nickname: 'songhao8080',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    4001: {
      id: 4001,
      content:
        '\u5927\u4e8c\uff0c\u8868\u793a\u4e70\u4e0d\u8d77\u3002\u3002\u3002\u54c8\u54c8\u54c8\u0669(\u0e51>\u25e1<\u0e51)\u06f6',
      created_at: '2019-07-28 10:58:27',
      updated_at: '2019-07-28 10:58:27',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 12175,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12175,
        uname: '5201314',
        nickname: 'BadBoy',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    3980: {
      id: 3980,
      content:
        '\u4e09\u5927\u6846\u67b6\u7684\u9ad8\u7ea7\u90e8\u5206\u6709\u5417\u00a0\u2665(\u273d\u00b4\u2200\\`\u273d)\uff89\u00a0',
      created_at: '2019-07-19 17:38:02',
      updated_at: '2019-07-19 17:38:02',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 12282,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12282,
        uname: '65930212282131',
        nickname: '\u6728\u4e9a',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    3979: {
      id: 3979,
      content: 'react\u6709\u8bfe\u5417\uff1f',
      created_at: '2019-07-19 17:37:31',
      updated_at: '2019-07-19 17:37:31',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'question',
      s: 'ok',
      user_id: 12282,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12282,
        uname: '65930212282131',
        nickname: '\u6728\u4e9a',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    3978: {
      id: 3978,
      content: '\u4e3a\u5565\u6709\u7684\u89c6\u9891\u6ca1\u58f0\u97f3\u554a',
      created_at: '2019-07-19 17:13:03',
      updated_at: '2019-07-19 17:13:03',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 12248,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12248,
        uname: '65930212248131',
        nickname: '\u6444\u5f71\u9648',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    3963: {
      id: 3963,
      content: '2000\uff1f',
      created_at: '2019-07-15 16:29:37',
      updated_at: '2019-07-15 16:29:37',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 11794,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 11794,
        uname: '65930211794131',
        nickname: 'Cookie',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    3954: {
      id: 3954,
      content: '\u6709\u4e00\u8d77\u4e70\u8868\u54e5\u7684\u8bfe\u7684\u5417',
      created_at: '2019-07-12 16:40:35',
      updated_at: '2019-07-12 16:40:35',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 11798,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 11798,
        uname: '65930211798131',
        nickname: 'cqq',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
    3934: {
      id: 3934,
      content: '\u5e0c\u671b\u53ef\u4ee5\u4fbf\u5b9c\u70b9\u3002',
      created_at: '2019-07-03 19:51:50',
      updated_at: '2019-07-03 19:51:50',
      iid: 388,
      iname: 'post',
      reply_to: null,
      t: 'comment',
      s: 'ok',
      user_id: 12100,
      data: null,
      ins: {
        title: '\u65e5\u5e38\u524d\u620f',
        mmid: '29.0',
        t: 'period',
        iname: 'post',
        cover_url: null,
      },
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 12100,
        uname: '65930212100131',
        nickname: '\u559c\u6b22web',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
      r_reply_to: null,
      r_upvoted_user: [],
    },
  },
  count: 72,
  limit: 15,
};
let d = {
  success: true,
  d: {
    t: 'comment',
    iname: 'post',
    iid: '388',
    content: '\u597d\u4eba',
    s: 'ok',
    user_id: 8356,
    user_ip: '101.231.252.107',
    updated_at: '2021-10-21 18:51:42',
    created_at: '2021-10-21 18:51:42',
    id: 4713,
    ins: {
      title: '\u65e5\u5e38\u524d\u620f',
      mmid: '29.0',
      t: 'period',
      iname: 'post',
      cover_url: null,
    },
    downvoted_by_him: false,
    upvoted_by_him: false,
    r_user: {
      id: 8356,
      uname: 'xingchen',
      nickname: '\u661f\u8fb0',
      t: ['regular'],
      promote_child_discount_duration_in_year: 0,
    },
    r_reply_to: null,
  },
};
let c = {
  t: 'comment',
  iname: 'post',
  iid: '388',
  content: '好人',
};

let b = {
  content: '好人',
  iid: '388',
  iname: 'post',
  reply_to: 4713,
  t: 'comment',
};
let a = {
  success: true,
  d: {
    t: 'comment',
    iname: 'post',
    iid: '388',
    content: '\u597d\u4eba',
    reply_to: 4713,
    s: 'ok',
    user_id: 8356,
    user_ip: '101.231.252.107',
    updated_at: '2021-10-21 18:52:11',
    created_at: '2021-10-21 18:52:11',
    id: 4714,
    ins: {
      title: '\u65e5\u5e38\u524d\u620f',
      mmid: '29.0',
      t: 'period',
      iname: 'post',
      cover_url: null,
    },
    downvoted_by_him: false,
    upvoted_by_him: false,
    r_user: {
      id: 8356,
      uname: 'xingchen',
      nickname: '\u661f\u8fb0',
      t: ['regular'],
      promote_child_discount_duration_in_year: 0,
    },
    r_reply_to: {
      id: 4713,
      content: '\u597d\u4eba',
      t: 'comment',
      s: 'ok',
      user_id: 8356,
      created_at: '2021-10-21 18:51:42',
      ins: null,
      downvoted_by_him: false,
      upvoted_by_him: false,
      r_user: {
        id: 8356,
        uname: 'xingchen',
        nickname: '\u661f\u8fb0',
        t: ['regular'],
        promote_child_discount_duration_in_year: 0,
      },
    },
  },
};




