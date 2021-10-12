import { inject, observer } from 'mobx-react';
import React from 'react';

function MobxDemo({ commonStore }) {
  const { data, increment, decrement, clear } = commonStore;
  return (
    <div>
      <h3>{data.count}</h3>
      <div>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => clear()}>-1</button>
      </div>
    </div>
  );
}
export default inject('commonStore')(observer(MobxDemo));
