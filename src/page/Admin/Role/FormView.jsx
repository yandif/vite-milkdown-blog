import { message } from '@/components/Message';
import { CREATE, EDIT, VIEW } from '@/constants';
import { Role } from '@/services';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { useMount } from 'react-use';
const { Option } = Select;
const { TextArea } = Input;
const defaultAction = {
  query: () => {}, // 表格请求数据
};

const FormView = ({ action = defaultAction, formRef }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [actionType, setActionType] = useState(CREATE);
  const [form] = Form.useForm();

  useMount(() => {
    formRef.current = { showModal };
  });

  const showModal = ({ data, type }) => {
    setDisabled(false);
    setActionType(type);
    form.resetFields();

    if (type === EDIT) {
      form.setFieldsValue(data);
    }

    if (type === VIEW) {
      form.setFieldsValue(data);
      setDisabled(true);
    }

    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      if (actionType === VIEW) {
        return setIsModalVisible(false);
      }
      if (actionType === CREATE) {
        const data = await form.validateFields();
        console.log(data);
        const res = await Role.create(data);
        if (res?.code === 0) {
          message.success('创建成功');
          action?.query();
          setIsModalVisible(false);
        }
      }
      if (actionType === EDIT) {
        const data = await form.validateFields();
        const res = await Role.edit(data?.id, data);
        if (res?.code === 0) {
          message.success('修改成功');
          action?.query();
          setIsModalVisible(false);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const titleMap = {
    [VIEW]: '查看角色',
    [CREATE]: '添加角色',
    [EDIT]: '修改角色',
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={() => showModal({ type: CREATE })}
      >
        添加角色
      </Button>
      <Modal
        title={titleMap[actionType]}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={{
            status: 1,
            isDefault: 1,
          }}
        >
          {[VIEW, EDIT].includes(actionType) && (
            <FormItem label="角色ID" name="id">
              <Input disabled />
            </FormItem>
          )}
          <FormItem
            label="角色名"
            name="name"
            rules={[
              { required: true, whitespace: true, message: '必填' },
              { max: 12, message: '最多输入12位字符' },
            ]}
          >
            <Input placeholder="请输入角色名" disabled={disabled} />
          </FormItem>
          <FormItem
            label="描述"
            name="description"
            rules={[{ max: 100, message: '最多输入100个字符' }]}
          >
            <TextArea rows={4} disabled={disabled} autoSize={{ minRows: 2, maxRows: 6 }} />
          </FormItem>
          <FormItem label="状态" name="status" rules={[{ required: true, message: '请选择状态' }]}>
            <Select disabled={disabled}>
              <Option key={1} value={1}>
                启用
              </Option>
              <Option key={-1} value={-1}>
                禁用
              </Option>
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
};

export default FormView;

const FormItem = ({ children, ...props }) => {
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
