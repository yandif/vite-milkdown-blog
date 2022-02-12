/** 通用动态面包屑 **/
import './index.css';

import { EnvironmentOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const BreadCom: FC<{ menus: any[] }> = (props) => {
  const location = useLocation();

  /** 根据当前location动态生成对应的面包屑 **/
  const breads = useMemo(() => {
    const paths = location.pathname.replace(/^\/admin/, '');
    const breads = [];

    let parentId: any = null;
    do {
      const pathObj = props.menus.find((v: { id: any; url: any }) =>
        v.id === parentId || v.url === paths
      );

      if (pathObj) {
        breads.push(
          <Breadcrumb.Item key={pathObj.id}>{pathObj.title}</Breadcrumb.Item>,
        );
        parentId = pathObj.parent;
      } else {
        parentId = null;
      }
    } while (parentId);

    breads.reverse();
    return breads;
  }, [location.pathname, props.menus]);

  return (
    <div className="bread">
      <EnvironmentOutlined className="icon" />
      <Breadcrumb>
        {breads?.length > 0
          ? (
            breads
          )
          : <Breadcrumb.Item key="admin-bread-home">首页</Breadcrumb.Item>}
      </Breadcrumb>
    </div>
  );
};
export default BreadCom;
