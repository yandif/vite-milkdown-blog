import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;
const { Option } = Select;

const AddForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => showModal()}>
        添加用户
      </Button>
      <Modal title="添加用户" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          initialValues={{
            formConditions: 1,
          }}
        >
          <Form.Item label="用户名" name="formUsername">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码" name="formPassword">
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item label="电话" name="formPhone">
            <Input placeholder="请输入手机号" maxLength={11} />
          </Form.Item>
          <Form.Item label="邮箱" name="formEmail">
            <Input placeholder="请输入邮箱地址" />
          </Form.Item>
          <Form.Item label="描述" name="formDesc">
            <TextArea rows={4} autoSize={{ minRows: 2, maxRows: 6 }} />
          </Form.Item>
          <Form.Item label="状态" name="formConditions">
            <Select>
              <Option key={1} value={1}>
                启用
              </Option>
              <Option key={-1} value={-1}>
                禁用
              </Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddForm;
