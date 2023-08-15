import Home from '@/views/home'
import SubHome from '@/views/home/subIndex'

/**
 * 基础路由
 * @type { *[] }
 */
const routerMap = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
    meta: { title: '主页', keepAlive: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: '主页', keepAlive: false }
  },
  {
    path: '/subhome',
    name: 'SubHome',
    component: SubHome,
    meta: { title: '主页', keepAlive: false }
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

const dynamicRouterMap = [
  {
    path: '/pin_form',
    name: 'pin_form',
    component: () => import('@/views/pin/form'),
    meta: {
      title: '产成品入库',
      redblue: true,
      keepAlive: false
    }
  },
  {
    path: '/so',
    name: 'so',
    component: () => import('@/views/so'),
    meta: {
      title: '销售出库',
      redblue: true,
      keepAlive: false
    }
  },
  {
    path: '/so_form',
    name: 'so_form',
    component: () => import('@/views/so/form'),
    meta: {
      title: '销售出库',
      keepAlive: false
    }
  },
  {
    path: '/stock',
    name: 'stock',
    component: () => import('@/views/stock'),
    meta: {
      title: '库存查询',
      redblue: false,
      keepAlive: false
    }
  },
  {
    path: '/mo',
    name: 'mo',
    component: () => import('@/views/mo'),
    meta: {
      title: '材料出库',
      redblue: true,
      keepAlive: false
    }
  },
  {
    path: '/mo_form',
    name: 'mo_form',
    component: () => import('@/views/mo/form'),
    meta: {
      title: '材料出库',
      keepAlive: false
    }
  },
  {
    path: '/trans_n',
    name: 'tran_n',
    component: () => import('@/views/trans/form_n'),
    meta: {
      title: '仓库调拨',
      redblue: false,
      keepAlive: false
    }
  },
]

export const constantRouterMap = routerMap.concat(dynamicRouterMap)
