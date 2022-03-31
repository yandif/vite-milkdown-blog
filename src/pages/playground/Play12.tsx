import React, { Component, useState } from 'react';

const Mixin = (MixinComponent: any) => {
  const MixinComponentWrapper = (props: any) => {
    const [val, setVal] = useState(0);

    const update = () => {
      setVal(val + 1);
    };

    return (<MixinComponent
      update={update}
      val={val}
      {...props}
    />);
  };

  return MixinComponentWrapper;
};
const Button = (props: any) => {
  return (
    <button onClick={props.update}>
      {props.txt} - {props.val}
    </button>
  );
};

const Label = (props: any) => {
  return (
    <label onMouseMove={props.update}>
      {props.txt} - {props.val}
    </label>
  );
};

const ButtonMixed = Mixin(Button);
const LabelMixed = Mixin(Label);

class Mixins extends Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="button" />
        <LabelMixed txt="label" />
      </div>
    );
  }
}

export default Mixins;
