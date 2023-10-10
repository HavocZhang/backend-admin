import type { SelectEventHandler } from 'ant-design-vue/es/menu/src/interface'
import type { Key, LayoutPropsType, MenuDataItem } from './typing'
import { runEvent } from '@/utils/type'

export interface LayoutProviderMethods {
  handleCollapsed?: (collapsed: boolean) => void
}

const layoutStateFunc = (
  props: LayoutPropsType,
  methods: LayoutProviderMethods = {},
) => {
  const hasPageContainer = shallowRef(false)
  const collapsedWidth = computed(() => props.collapsedWidth)
  const siderWidth = computed(() => props.siderWidth)
  const collapsed = computed(() => props.collapsed)
  const headerHeight = computed(() => props.headerHeight)
  const menuData = computed(() => props.menuData)

  const menuDataMap = reactive(new Map<Key, MenuDataItem>())

  watch(menuData, () => {
    menuDataMap.clear()
    menuData.value?.forEach((item) => {
      menuDataMap.set(item.path, item)
    })
  }, {
    immediate: true,
  })

  const selectedMenus = computed(() => {
    return menuData.value
  })

  const openKeys = computed(() => props.openKeys)
  const selectedKeys = computed(() => props.selectedKeys)
  const handleOpenKeys = (val: Key[]) => {
    runEvent(props['onUpdate:openKeys'], val)
  }
  const handleSelectedKeys = (val: Key[]) => {
    runEvent(props['onUpdate:selectedKeys'], val)
  }
  const handleMenuSelect: SelectEventHandler = (data) => {
    runEvent(props.onMenuSelect, data)
  }
  return {
    collapsed,
    collapsedWidth,
    siderWidth,
    hasPageContainer,
    headerHeight,
    menuData,
    selectedMenus,
    selectedKeys,
    openKeys,
    handleOpenKeys,
    handleSelectedKeys,
    handleMenuSelect,
    ...methods,
  }
}

const [useLayoutProvider, useLayoutInject]
  = createInjectionState(layoutStateFunc)

export { useLayoutProvider }

export const useLayoutState = (): ReturnType<typeof layoutStateFunc> =>
  useLayoutInject()!
