import create from 'zustand';

type BearsState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useStore = create<BearsState>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}));

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <span>{bears} around here ...</span>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

const Play4 = () => {
  return <>
    <h1>试一下zustand管理状态</h1>
    <Controls />
    <Controls />
    <Controls />
    <BearCounter />
    <BearCounter />
    <BearCounter />
    <BearCounter />
  </>;
};

export default Play4;
