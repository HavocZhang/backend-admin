export interface LayoutSetting {
  collapsed: boolean
}

export const useAppStore = defineStore('app', () => {
  const layoutSetting = reactive<LayoutSetting>({
    collapsed: false,
  })
  const toggleCollapsed = (collapsed: boolean) => {
    layoutSetting.collapsed = collapsed
  }

  return {
    layoutSetting,
    toggleCollapsed,
  }
})
