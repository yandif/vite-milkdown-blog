import ImgLogo from '@/assets/img/logo.png';
import Icon from "@/components/Icon";
import { Layout, Menu } from 'antd';
import { cloneDeep } from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const AdminSider = ({ collapsed, location, history, data }) => {
  const [chosedKey, setChosedKey] = useState([]); // 当前选中
  const [openKeys, setOpenKeys] = useState([]); // 当前需要被展开的项

  // 当页面路由跳转时，即location发生改变，则更新选中项
  useEffect(() => {
    const paths = location.pathname.split('/').filter(item => !!item);
    setChosedKey([location.pathname]);
    setOpenKeys(paths.map(item => `/${item}`));
  }, [location]);

  // ==================
  // 私有方法
  // ==================

  // 菜单被选择
  const onSelect = useCallback(
    e => {
      history.push(e.key);
    },
    [history]
  );

  // 工具 - 递归将扁平数据转换为层级数据
  const flatToTree = useCallback((one, data) => {
    let kids;
    if (!one) {
      // 第1次递归
      kids = data.filter(item => !item.parent);
    } else {
      kids = data.filter(item => item.parent === one.id);
    }
    kids.forEach(item => (item.children = flatToTree(item, data)));
    return kids.length ? kids : null;
  }, []);

  // 构建树结构
  const makeTreeDom = useCallback(data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.url}
            title={
              !item.parent && item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              ) : (
                item.title
              )
            }
          >
            {makeTreeDom(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Item key={item.url}>
            {!item.parent && item.icon ? <Icon type={item.icon} /> : null}
            <span>{item.title}</span>
          </Item>
        );
      }
    });
  }, []);

  // ==================
  // 计算属性 memo
  // ==================

  /** 处理原始数据，将原始数据处理为层级关系 **/
  const treeDom = useMemo(() => {
    const d = cloneDeep(data);
    // 按照sort排序
    d.sort((a, b) => {
      return a.sorts - b.sorts;
    });
    const sourceData = flatToTree(null, d) || [];
    const treeDom = makeTreeDom(sourceData);
    return treeDom;
  }, [data, flatToTree, makeTreeDom]);

  return (
    <Sider width={256} className="admin-sider" trigger={null} collapsible collapsed={collapsed}>
      <div className={collapsed ? 'menuLogo hide' : 'menuLogo'}>
        <Link to="/admin/">
          <img src={ImgLogo} />
          <div>React-Admin</div>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={chosedKey}
        {...(collapsed ? {} : { openKeys })}
        onOpenChange={keys => setOpenKeys(keys)}
        onSelect={onSelect}
      >
        {treeDom}
      </Menu>
    </Sider>
  );
};
export default AdminSider;
