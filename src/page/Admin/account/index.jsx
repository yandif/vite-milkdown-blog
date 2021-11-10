import React, { useState, useMemo } from 'react';
import { useSetState, useMount } from 'react-use';
import { Account as AccountService } from '@/services';
import { useSelector, useDispatch } from 'react-redux';
import { message } from '@/components/Message';
import { Form, Button, Input, Table, Popconfirm, Modal, Tooltip, Divider, Select } from 'antd';
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
    pageNumber: 1,
    pageSize: 10,
    total: 0,
  });

  const renderStatus = value => {
    const statusFlag = value === 1;
    return <span style={{ color: statusFlag ? 'green' : 'red' }}>{statusFlag ? '启用' : ''}</span>;
  };
  // table字段
  const tableColumns = [
    { title: 'ID', dataIndex: 'id' },
    { title: '用户名', dataIndex: 'username' },
    { title: '电话', dataIndex: 'mobile' },
    { title: '邮箱', dataIndex: 'email' },
    { title: '状态', dataIndex: 'status', render: renderStatus },
  ];

  tableColumns.forEach(column => {
    column.key = column.dataIndex;
  });

  const loadData = async params => {
    setLoading(true);
    const res = await AccountService.getPageList(params);
    if (res.code === 0) {
      const { data, ...rest } = res?.data;
      setData(data);
      setPage(rest);
    }
    setLoading(false);
  };

  useMount(() => {
    loadData();
  });

  const tableData = useMemo(() => {
    return data?.map(account => ({
      key: account?.id,
      ...account,
    }));
  }, [page, data]);

  // 表格页码改变
  const onTablePageChange = (pageNumber, pageSize) => {
    loadData({ pageNumber, pageSize });
  };
  console.log(tableData);
  return (
    <Table
      columns={tableColumns}
      loading={loading}
      dataSource={tableData}
      pagination={{
        total: page.total,
        current: page.pageNumber,
        pageSize: page.pageSize,
        showQuickJumper: true,
        showTotal: (total, range) => `共 ${total} 条数据`,
        onChange: onTablePageChange,
      }}
    />
  );
};
export default Account;
