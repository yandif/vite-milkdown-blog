import { ColProps, Form, Input as AntdInput } from 'antd';
import { LiteralUnion } from 'antd/lib/_util/type';
import { Rule } from 'antd/lib/form';
import { assign } from 'lodash';
import { FC } from 'react';

type InputProps = {
  wrapperCol?: ColProps,
  labelCol?: ColProps,
  name?: string,
  label?: React.ReactNode,
  rules?: Rule[];

  type?: LiteralUnion<'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week', string>;
  disabled?: boolean,
  placeholder?: string,
  maxLength?: number,
  autoComplete?: LiteralUnion<'on' | 'off' | 'new-password', string>;
}

const defaultProps: InputProps = {
  name: '_name',
  label: '_label',
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
  disabled: false,
  placeholder: '请输入'
};

const Input: FC<InputProps> = (props) => {
  const {
    labelCol,
    wrapperCol,
    name,
    label,
    rules,

    type,
    disabled,
    placeholder,
    autoComplete,
    maxLength,
  } = assign(defaultProps, props);

  return (
    <Form.Item
      key={name}
      name={name}
      label={label}
      rules={rules}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <AntdInput
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    </Form.Item>
  );
};

export default Input;
