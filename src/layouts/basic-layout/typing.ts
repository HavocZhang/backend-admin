import type { ExtractPropTypes } from 'vue'
import { booleanType, eventType, numberType } from '@/utils/type'

export const LayoutProps = {
  collapsedWidth: numberType(48),
  siderWidth: numberType(234),
  headerHeight: numberType<number>(48),
  collapsed: booleanType<boolean>(false),
  onCollapsed: eventType<(collapsed: boolean) => void>(),
}

export type LayoutPropsType = Partial<ExtractPropTypes<typeof LayoutProps>>
