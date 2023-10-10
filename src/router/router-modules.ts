const routerModules = import.meta.glob([
  '@/pages/**/*.vue',
  '!@/pages/**/*copy.vue',
  '!@/pages/**/component',
  '!@/pages/**/components',
  '!@/pages/**/composables',
  '!@/pages/**/hooks',
  '!@/pages/**/locales',
  '!@/pages/**/modules',
  '!@/pages/**/plugins',
  '!@/pages/**/tests',
  '!@/pages/**/test',
  '!@/pages/common',
  '!@/pages/account',
  '!@/pages/login',
  '!@/pages/terms',
])
export const basicRouteMap = {
  RouteView: () => import('@/pages/common/route-view.vue'),
  ComponentError: () => import('@/pages/exception/component-not-found.vue'),
}

export const getRouterModule = (path?: string): any => {
  if (!path) return basicRouteMap.ComponentError

  // 判断是否在basicRouteMap中存在
  if (path in basicRouteMap) return (basicRouteMap as any)[path]

  // 判断开头是不是/
  if (path.startsWith('/')) path = path.slice(1)
  // 组装数据格式
  const fullPath = `/src/pages/${path}.vue`
  const fullPathIndex = `/src/pages/${path}/index.vue`

  if (fullPathIndex in routerModules) return routerModules[fullPathIndex]

  // 返回插件信息
  return routerModules[fullPath]
}

export default routerModules
