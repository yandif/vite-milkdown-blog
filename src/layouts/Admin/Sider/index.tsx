import './index.less';

import { Layout, Menu } from 'antd';
import { cloneDeep } from 'lodash';
import { observer } from 'mobx-react-lite';
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ImgLogo from '@/assets/img/logo.png';
import Icon from '@/components/Icon';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

type AdminSiderProps = {
  collapsed: boolean;
  data: any;
  baseName: string;
};
const AdminSider: FC<AdminSiderProps> = (
  { collapsed, data, baseName },
) => {
  const location = useLocation();
  const nav = useNavigate();
  const [chosedKey, setChosedKey] = useState<Array<string>>(); // 当前选中
  const [openKeys, setOpenKeys] = useState<Array<string>>(); // 当前需要被展开的项
  const initSelectKey = () => {
    const paths = location.pathname.split('/').filter((item) => !!item);
    setChosedKey([location.pathname.replace(baseName, '')]);
    setOpenKeys([...paths.map((item) => `/${item}`)]);
  };
  // 当页面路由跳转时，即location发生改变，则更新选中项
  useEffect(() => {
    initSelectKey();
  }, [location]);

  useEffect(() => {
    if (!collapsed) {
      initSelectKey();
    }
  }, [collapsed]);

  // ==================
  // 私有方法
  // ==================

  // 菜单被选择
  const onSelect = useCallback(
    (e) => {
      nav(baseName + e.key);
    },
    [history],
  );

  // 工具 - 递归将扁平数据转换为层级数据
  const flatToTree = useCallback((one, data) => {
    let kids;
    if (!one) {
      // 第1次递归
      kids = data.filter((item: { parent: any; }) => !item.parent);
    } else {
      kids = data.filter((item: { parent: any; }) => item.parent === one.id);
    }
    kids.forEach((item: { children: any; }) => (item.children = flatToTree(item, data)));
    return kids.length ? kids : null;
  }, []);

  // 构建树结构
  const makeTreeDom = useCallback((data) => {
    return data.map((item: { children: any; url: React.Key | null | undefined; parent: any; icon: string; title: object | null | undefined; }) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.url}
            title={!item.parent && item.icon
              ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              )
              : (
                item.title
              )}
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
    d.sort((a: { sorts: number; }, b: { sorts: number; }) => {
      return a.sorts - b.sorts;
    });
    const sourceData = flatToTree(null, d) || [];
    const treeDom = makeTreeDom(sourceData);
    return treeDom;
  }, [data, flatToTree, makeTreeDom]);

  return (
    <Sider
      width={256}
      className="admin-sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className={collapsed ? 'menuLogo hide' : 'menuLogo'}>
        <Link to="/admin/home">
          <img src={ImgLogo} />
          <div>React-Admin</div>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={chosedKey}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys)}
        onSelect={onSelect}
      >
        {treeDom}
      </Menu>
    </Sider>
  );
};
export default observer(AdminSider);
