export default [
  {
    name: '欢迎',
    path: '/',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: '邀请页',
    path: '/:id',
    icon: 'smile',
    component: './Welcome',
    hideInMenu: true,
  },
  {
    name: '用户页',
    layout: false,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: '登录',
        path: '/user/login',
        component: './User/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './User/Register',
      },
      {
        name: '邀请码注册',
        path: '/user/register/:id',
        component: './User/Register',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '接口广场',
    path: '/interface/list',
    icon: 'RedditOutlined',
    component: './InterfaceSquare',
  },
  {
    name: '积分商城',
    path: '/recharge/list',
    icon: 'PayCircleOutlined',
    component: './Recharge',
  },
  {
    name: '我的订单',
    path: '/order/list',
    icon: 'ProfileOutlined',
    component: './Order/OrderList',
  },
  {
    name: '订单支付',
    path: '/order/pay/:id',
    icon: 'PayCircleOutlined',
    component: './Order/PayOrder',
    hideInMenu: true,
  },
  {
    name: '订单详情',
    path: '/order/info/:id',
    icon: 'ProfileOutlined',
    component: './Order/OrderInfo',
    hideInMenu: true,
  },
  {
    name: '个人中心',
    path: '/account/center',
    icon: 'UserOutlined',
    component: './User/UserInfo',
    hideInMenu: true,
  },
  {
    name: '接口详情',
    path: '/interface_info/:id',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/interface/list',
      },
      {
        name: '接口管理',
        path: '/admin/interface/list',
        icon: 'ApiOutlined',
        component: './Admin/InterfaceInfoList',
      },
      {
        name: '商品管理',
        path: '/admin/productInfo/list',
        icon: 'table',
        component: './Admin/ProductInfoList',
      },
      {
        name: '用户管理',
        path: '/admin/user/list',
        icon: 'TeamOutlined',
        component: './Admin/UserList',
      },
    ],
  },
  {
    name: '404 Not Found',
    path: '*',
    layout: false,
    component: './404',
  },
];
