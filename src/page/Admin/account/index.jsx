import { Account as AccountService } from '@/services';
import { Table } from 'antd';
import React, { useMemo, useState } from 'react';
import { useMount, useSetState } from 'react-use';
import AddForm from './AddForm';
import './index.less';

const Account = () => {
  // 数据是否正在加载中
  const [loading, setLoading] = useState(false);
  // 数据
  const [data, setData] = useState([]);
  // 分页相关参数
  const [page, setPage] = useSetState({
    pageNumber: 1,
    pageSize: 10,
    total: 0,
  });
  // 表格数据
  const tableData = useMemo(() => {
    return data?.map(account => ({
      key: account?.id,
      ...account,
    }));
  }, [page, data]);
  // 加载数据
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
  // 分页配置
  const pagination = {
    total: page.total,
    current: page.pageNumber,
    pageSize: page.pageSize,
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 30, 50],
    onChange: (pageNumber, pageSize) => loadData({ pageNumber, pageSize }),
    showTotal: (total, range) => `第 ${range.join('-')} 条/总共 ${total} 条`,
  };
  // 首次加载
  useMount(() => {
    loadData(page);
  });
  // 渲染状态
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
  //添加key
  tableColumns.forEach(column => {
    column.key = column.dataIndex;
  });

  return (
    <div className="account-main">
      <div className="account-main-header">
        <AddForm />
      </div>
      <Table
        columns={tableColumns}
        loading={loading}
        dataSource={tableData}
        pagination={pagination}
        size="middle"
        scroll={{ y: 440 }}
      />
    </div>
  );
};
export default Account;
