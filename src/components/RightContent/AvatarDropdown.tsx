import { valueLength } from '@/pages/User/UserInfo';
import { userLogoutUsingPost } from '@/services/api-backend/userController';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  children?: React.ReactNode;
};

export const AvatarName = () => {
  const { initialState } = useModel('@@initialState');
  const { loginUser } = initialState || {};
  return (
    <p className="anticon">{valueLength(loginUser?.username) ? loginUser?.username : '默认昵称'}</p>
  );
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ children }) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { loginUser } = initialState || {};
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await userLogoutUsingPost();
    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      setInitialState((oldState) => {
        return {
          ...oldState,
          loginUser: initialState?.loginUser,
        };
      });
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        flushSync(() => {
          setInitialState((s: any) => ({ ...s, loginUser: undefined }));
        });
        loginOut();
        return;
      }
      if (key === 'center') {
        history.push(`/account/${key}`);
        return;
      }
      if (key === 'login') {
        history.push(`/user/login`);
        return;
      }
    },
    [setInitialState],
  );

  const menuItems = [
    {
      key: 'center',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      danger: true,
      label: '退出登录',
    },
  ];

  return loginUser ? (
    <HeaderDropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      {children}
    </HeaderDropdown>
  ) : (
    <HeaderDropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: [
          {
            key: 'login',
            icon: <LoginOutlined />,
            label: '登录账号',
          },
        ],
      }}
    >
      {children}
    </HeaderDropdown>
  );
};
