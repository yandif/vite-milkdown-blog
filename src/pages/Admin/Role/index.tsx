import './index.less';

import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ToolOutlined
} from '@ant-design/icons';
import {
  Divider,
  Popconfirm,
  Table,
  TablePaginationConfig,
  Tooltip
} from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

import { message } from '@/components/Message';
import { FORM } from '@/constants';
import { Role as RoleService } from '@/services';

import FormView from './FormView';

const Role = () => {
  const formRef = useRef<any>();
  // 数据是否正在加载中
  const [loading, setLoading] = useState(false);
  // 数据
  const [data, setData] = useState<Array<{ id: string }>>([]);
  // 分页相关参数
  const [page, setPage] = useState({
    pageNumber: 1,
    pageSize: 10,
    total: 0,
  });
  // 表格数据
  const tableData = useMemo(() => {
    return data?.map((role) => ({
      key: role?.id,
      ...role,
    }));
  }, [page, data]);
  // 加载数据
  const loadData = async (
    params: {
      [x: string]: any;
      pageNumber?: number;
      pageSize?: number;
      total?: number;
    },
  ) => {
    setLoading(true);
    const res = await RoleService.getPageList(params);
    if (res.code === 0) {
      const { data, ...rest } = res.data;
      setData(data);
      setPage(rest);
    }
    setLoading(false);
  };
  // 分页配置
  const pagination: TablePaginationConfig = {
    total: page.total,
    current: page.pageNumber,
    pageSize: page.pageSize,
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '30', '50'],
    onChange: (pageNumber, pageSize) => loadData({ pageNumber, pageSize }),
    showTotal: (total, range) => `第 ${range.join('-')} 条/总共 ${total} 条`,
  };
  // 首次加载
  useEffect(() => {
    loadData(page);
  }, []);
  // 渲染状态
  const renderStatus = (value: number) => {
    const statusFlag = value === 1;
    return (
      <span style={{ color: statusFlag ? 'green' : 'red' }}>
        {statusFlag ? '启用' : '禁用'}
      </span>
    );
  };
  // table字段
  const tableColumns = [
    { title: 'ID', dataIndex: 'id', width: 100 },
    { title: '角色名', dataIndex: 'name' },
    { title: '描述', dataIndex: 'description' },
    { title: '状态', dataIndex: 'status', render: renderStatus, width: 100 },
    {
      title: '操作',
      key: 'control',
      width: 200,
      render: (v: any, record: any) => {
        const controls = [];

        controls.push(
          <span key="0" className="control-btn-green">
            <Tooltip placement="top" title="查看">
              <EyeOutlined
                onClick={() => {
                  formRef?.current?.showModal({ data: record, type: FORM.VIEW });
                }}
              />
            </Tooltip>
          </span>,
        );

        controls.push(
          <span key="1" className="control-btn-blue">
            <Tooltip placement="top" title="修改">
              <ToolOutlined
                onClick={() => {
                  formRef?.current?.showModal({ data: record, type: FORM.EDIT });
                }}
              />
            </Tooltip>
          </span>,
        );

        controls.push(
          <span key="2" className="control-btn-blue">
            <Tooltip placement="top" title="分配角色">
              <EditOutlined />
            </Tooltip>
          </span>,
        );

        controls.push(
          <Popconfirm
            key="3"
            title="确定删除吗?"
            onConfirm={async () => {
              const res = await RoleService.deleteRole(record.id);
              if (res.code === 0) {
                message.success('删除成功');
                loadData(page);
              }
            }}
            okText="确定"
            cancelText="取消"
          >
            <span className="control-btn-red">
              <Tooltip placement="top" title="删除">
                <DeleteOutlined />
              </Tooltip>
            </span>
          </Popconfirm>
        );

        const result: JSX.Element[] = [];
        controls.forEach((item, index) => {
          if (index) {
            result.push(<Divider key={`line${index}`} type="vertical" />);
          }
          result.push(item);
        });
        return result;
      },
    },
  ];
  //添加key
  tableColumns.forEach((column) => {
    column.key = column.dataIndex;
  });

  return (
    <div className="role-main">
      <div className="role-main-header">
        <FormView
          action={{
            query: () => {
              loadData(page);
            },
          }}
          formRef={formRef}
        />
      </div>
      <Table
        columns={tableColumns}
        loading={loading}
        dataSource={tableData}
        pagination={pagination}
        size="middle"
        scroll={{ y: 374 }}
      />
    </div>
  );
};
export default Role;
