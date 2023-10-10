import { omit } from 'lodash-es'
import type { RouteRecordRaw } from 'vue-router'
import { basicRouteMap, getRouterModule } from './router-modules'
import dynamicRoutes, { ROOT_ROUTE_REDIRECT_PATH } from '@/router/dynamic-routes'
import type { MenuData, MenuDataItem } from '@/layouts/basic-layout/typing'
import { isUrl } from '@/utils/is'

let cache_key = 1

const getCacheKey = () => `Cache_Key_${cache_key++}`

function renderTitle(route: RouteRecordRaw) {
  const { title } = route.meta || {}
  if (!title)
    return ''
  return title
}

function formatMenu(route: RouteRecordRaw, path?: string) {
  return {
    id: route.meta?.id,
    parentId: route.meta?.parentId,
    title: () => renderTitle(route),
    icon: route.meta?.icon || '',
    path: path ?? route.path,
    hideInMenu: route.meta?.hideInMenu || false,
    parentKeys: route.meta?.parentKeys || [],
    hideInBreadcrumb: route.meta?.hideInBreadcrumb || false,
    hideChildrenInMenu: route.meta?.hideChildrenInMenu || false,
    locale: route.meta?.locale,
    keepAlive: route.meta?.keepAlive || false,
    name: route.name as string,
    url: route.meta?.url || '',
    target: route.meta?.target || '_blank',
  }
}

// 本地静态路由生成菜单的信息
export function genRoutes(routes: RouteRecordRaw[], parent?: MenuDataItem) {
  const menuData: MenuData = []
  routes.forEach((route) => {
    let path = route.path
    if (!path.startsWith('/') && !isUrl(path)) {
      // 判断当前是不是以 /开头，如果不是就表示当前的路由地址为不完全的地址
      if (parent)
        path = `${parent.path}/${path}`
      else
        path = `/${path}`
    }
    // 判断是不是存在name，如果不存在name的情况下，自动补充一个自定义的name，为了更容易的去实现保活的功能，name是必须的
    if (!route.name)
      route.name = getCacheKey()
    const item: MenuDataItem = formatMenu(route, path)
    item.children = []
    if (route.children && route.children.length)
      item.children = genRoutes(route.children, item)
    if (item.children?.length === 0)
      delete item.children
    menuData.push(item)
  })
  return menuData
}

/**
 * 通过前端数据中的dynamic-routes动态生成菜单和数据
 */
export async function generateRoutes() {
  const menuData = genRoutes(dynamicRoutes)

  return {
    menuData,
    routeData: dynamicRoutes,
  }
}

function checkComponent(component: RouteRecordRaw['component']) {
  for (const componentKey in basicRouteMap) {
    if (component === (basicRouteMap as any)[componentKey])
      return undefined
  }
  return component
}

// 路由拉平处理
function flatRoutes(routes: RouteRecordRaw[], parentName?: string, parentComps: RouteRecordRaw['component'][] = []) {
  const flatRouteData: RouteRecordRaw[] = []
  for (const route of routes) {
    const parentComponents = [...parentComps]
    const currentRoute = omit(route, ['children']) as RouteRecordRaw
    if (!currentRoute.meta)
      currentRoute.meta = {}
    if (parentName)
      currentRoute.meta.parentName = parentName
    if (parentComponents.length > 0)
      currentRoute.meta.parentComps = parentComponents
    currentRoute.meta.originPath = currentRoute.path
    flatRouteData.push(currentRoute)
    if (route.children && route.children.length) {
      const comp = checkComponent(route.component)
      if (comp)
        parentComponents.push(comp)
      flatRouteData.push(...flatRoutes(route.children, route.name as string, [...parentComponents]))
    }
  }
  return flatRouteData
}

export function generateFlatRoutes(routes: RouteRecordRaw[]) {
  const flatRoutesList = flatRoutes(routes)
  // 拿到拉平后的路由，然后统一添加一个父级的路由,通过这层路由实现保活的功能
  const parentRoute: RouteRecordRaw = {
    path: '/',
    redirect: ROOT_ROUTE_REDIRECT_PATH,
    name: 'ROOT_EMPTY_PATH',
    component: getRouterModule('RouteView'),
    children: flatRoutesList,
  }
  return [parentRoute]
}
