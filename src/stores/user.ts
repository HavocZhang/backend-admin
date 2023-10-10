import type { MenuData } from '@/layouts/basic-layout/typing'
import { generateFlatRoutes, generateRoutes } from '@/router/generate-route'
import { rootRoute } from '@/router/dynamic-routes'

export const useUserStore = defineStore('user', () => {
  const routerData = shallowRef()
  const menuData = shallowRef<MenuData>([])
  const generateDynamicRoutes = async () => {
    const dynamicLoadWay = generateRoutes
    const { menuData: treeMenuData, routeData } = await dynamicLoadWay()
    menuData.value = treeMenuData

    routerData.value = {
      ...rootRoute,
      children: generateFlatRoutes(routeData),
    }
    return routerData.value
  }
  return {
    generateDynamicRoutes,
    menuData,
  }
})
