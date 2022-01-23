import './index.less';

import { FC, useState } from 'react';

export interface WendySwitch {
  checked?: boolean
  disabled?: boolean
  size?: 'small' | 'default' | 'large'
  onChange?: (value: boolean) => void
}

const Switch: FC<WendySwitch> = (props) => {
  const { checked: defaultChecked = false, size = 'default', disabled, onChange = () => { } } = props;
  const [checked, setChecked] = useState(defaultChecked);
  
  const handleClick = () => {
    onChange(!checked);
    setChecked(!checked);
  };

  return (
    <button
      className={`switch-warp switch-${size} ${checked ? 'checked' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="switch-circle" />
    </button>
  );

};

export default Switch;
