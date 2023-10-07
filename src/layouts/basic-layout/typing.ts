import type { ExtractPropTypes } from "vue";
import { numberType, booleanType, eventType } from "@/utils/type";

export const LayoutProps = {
  collapsedWidth: numberType(48),
  siderWidth: numberType(234),
  collapsed: booleanType<boolean>(false),
  onCollapsed: eventType<(collapsed: boolean) => void>(),
};

export type LayoutProps = Partial<ExtractPropTypes<typeof LayoutProps>>;
