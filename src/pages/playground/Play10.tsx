import { Button } from 'antd';
import { FC } from 'react';
import { onBeforeUnmount, onMounted, onUpdated, ref, useReactive, useReactivity, useRef, useWatch } from 'veact';

const Component: React.FC = () => {
  const count = useRef(0);
  console.log(count);
  const increment = () => {
    count.value++;
  };

  onMounted(() => {
    console.log('component mounted');
  });

  onUpdated(() => {
    console.log('component updated');
  });

  onBeforeUnmount(() => {
    console.log('component will unmount');
  });

  return (
    <div>
      <Button onClick={increment}>increment</Button>
      <h1>{count.value}</h1>
    </div>
  );

};

const Component1: React.FC = () => {
  const data = useReactive({
    count: 0,
  });
  const increment = () => {
    data.count++;
  };

  useWatch(data, (newData) => {
    console.log('data changed', newData);
  });

  useWatch(
    () => data.count,
    (newCount) => {
      console.log('count changed', newCount);
    }
  );

  return (
    <div>
      <span>{data.count}</span>
      <Button onClick={increment}>increment</Button>
    </div>
  );
};

// reactivity ref
const _count = ref(0);

const Component2 = () => {
  // to reactivity hook
  const count = useReactivity(() => _count);
  const increment = () => {
    count.value++;
  };

  return (
    <div>
      <span>{count.value}</span>
      <Button onClick={increment}>increment</Button>
    </div>
  );
};

const Play10: FC = () => {
  return <div>
    <Component />
    <Component1 />
    <Component2 />
  </div>;
};

export default Play10;
