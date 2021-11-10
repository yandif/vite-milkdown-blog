import React, { useState, useMemo } from 'react';
import { useSetState, useMount } from 'react-use';
import { Account as AccountService } from '@/services';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  Button,
  Input,
  Table,
  message,
  Popconfirm,
  Modal,
  Tooltip,
  Divider,
  Select,
} from 'antd';
import {
  EyeOutlined,
  EditOutlined,
  ToolOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
};

const Account = () => {
  const [loading, setLoading] = useState(false); // 数据是否正在加载中
  const [data, setData] = useState([]);

  // 分页相关参数
  const [page, setPage] = useSetState({
    pageNum: 1,
    pageSize: 10,
    total: 0,
  });
  // table字段
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: v =>
        v === 1 ? (
          <span style={{ color: 'green' }}>启用</span>
        ) : (
          <span style={{ color: 'red' }}>禁用</span>
        ),
    },
  ];
  const loadData = async () => {
    const res = await AccountService.getPageList();
    setData(res?.data?.data);
  };

  useMount(() => {
    loadData();
  });

  const tableData = useMemo(() => {
    return data.map((item, index) => {
      return {
        key: index,
        id: item.id,
        username: item.username,
        password: item.password,
        phone: item.phone,
        email: item.email,
        desc: item.desc,
        status: item.status,
        control: item.id,
        roles: item.roles,
      };
    });
  }, [page, data]);

  return <Table columns={tableColumns} loading={loading} dataSource={tableData} />;
};
export default Account;
