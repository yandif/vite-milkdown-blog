import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import { FC, FunctionComponent, useEffect, useState } from 'react';

import { message } from '@/components/Message';
import { FORM } from '@/constants';
import useDebounce from '@/hooks/useDebounce';
import { Account } from '@/services';
import { tool } from '@/utils';
const { Option } = Select;

const defaultAction = {
  query: () => { }, // 表格请求数据
};
type Props = {
  action: any;
  formRef: any;
};

const FormView: FC<Props> = ({ action = defaultAction, formRef }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [actionType, setActionType] = useState(FORM.CREATE);
  const [isLoading, debounce] = useDebounce('系统管理>账户管理：FormView 👇\n');
  const [form] = Form.useForm();

  useEffect(() => {
    formRef.current = { showModal };
  }, []);

  const showModal = ({ data, type }: { data?: any; type: FORM }) => {
    setDisabled(false);
    setActionType(type);
    form.resetFields();

    if (type === FORM.EDIT) {
      form.setFieldsValue(data);
    }

    if (type === FORM.VIEW) {
      form.setFieldsValue(data);
      setDisabled(true);
    }

    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (actionType === FORM.VIEW) {
      return setIsModalVisible(false);
    }
    if (actionType === FORM.CREATE) {
      const data = await form.validateFields();
      const res = await Account.createUser(data);
      if (res?.code === 0) {
        message.success('创建成功');
        action?.query();
        setIsModalVisible(false);
      }
    }
    if (actionType === FORM.EDIT) {
      const data = await form.validateFields();
      const res = await Account.editUser(data?.id, data);
      if (res?.code === 0) {
        message.success('修改成功');
        action?.query();
        setIsModalVisible(false);
      }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  type TitleMap = {
    [x: string]: string;
  };
  const titleMap: TitleMap = {
    [FORM.VIEW]: '查看用户',
    [FORM.CREATE]: '添加用户',
    [FORM.EDIT]: '修改用户',
  };
  return (
    <>
      <Button
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={() => showModal({ type: FORM.CREATE })}
      >
        添加用户
      </Button>
      <Modal
        title={titleMap[actionType]}
        visible={isModalVisible}
        onOk={debounce(handleOk)}
        confirmLoading={isLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={{
            status: 1,
            platform: 0,
          }}
        >
          {[FORM.VIEW, FORM.EDIT].includes(actionType) && (
            <FormItem label="用户ID" name="id">
              <Input disabled />
            </FormItem>
          )}
          <FormItem
            label="用户名"
            name="username"
            rules={[
              { required: true, whitespace: true, message: '必填' },
              { max: 12, message: '最多输入12位字符' },
            ]}
          >
            <Input placeholder="请输入用户名" disabled={disabled} />
          </FormItem>
          {actionType === FORM.CREATE && (
            <FormItem
              label="密码"
              name="password"
              rules={[
                { required: true, whitespace: true, message: '必填' },
                { min: 6, message: '最少输入6位字符' },
                { max: 18, message: '最多输入18位字符' },
              ]}
            >
              <Input
                type="password"
                placeholder="请输入密码"
                autoComplete="new-password"
                disabled={disabled}
              />
            </FormItem>
          )}
          <FormItem
            label="电话"
            name="mobile"
            rules={[
              () => ({
                validator: (rule: any, value: any) => {
                  if (value && !tool.checkPhone(value)) {
                    return Promise.reject('请输入有效的手机号码');
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input placeholder="请输入手机号" maxLength={11} disabled={disabled} />
          </FormItem>
          <FormItem
            label="邮箱"
            name="email"
            rules={[
              () => ({
                validator: (rule: any, value: string) => {
                  if (value && !tool.checkEmail(value)) {
                    return Promise.reject('请输入有效的邮箱地址');
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input placeholder="请输入邮箱地址" disabled={disabled} />
          </FormItem>
          <FormItem label="状态" name="status">
            <Select disabled={disabled}>
              <Option key={1} value={1}>
                启用
              </Option>
              <Option key={0} value={0}>
                禁用
              </Option>
            </Select>
          </FormItem>
          <FormItem label="平台" name="platform">
            <Select disabled={disabled}>
              <Option key={0} value={0}>
                默认平台
              </Option>
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
};

export default FormView;

const FormItem: FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Form.Item
      labelCol={{
        xs: { span: 24 },
        sm: { span: 4 },
      }}
      wrapperCol={{
        xs: { span: 24 },
        sm: { span: 19 },
      }}
      {...props}
    >
      {children}
    </Form.Item>
  );
};
