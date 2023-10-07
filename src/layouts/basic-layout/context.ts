import type { LayoutProps } from "./typing";
export interface LayoutProviderMethods {
  handleCollapsed?: (collapsed: boolean) => void;
}

const layoutStateFunc = (
  props: LayoutProps,
  methods: LayoutProviderMethods = {}
) => {
  const hasPageContainer = shallowRef(false);
  const collapsedWidth = computed(() => props.collapsedWidth);
  const siderWidth = computed(() => props.siderWidth);
  const collapsed = computed(() => props.collapsed);
  return {
    collapsed,
    collapsedWidth,
    siderWidth,
    hasPageContainer,
    ...methods,
  };
};

const [useLayoutProvider, useLayoutInject] =
  createInjectionState(layoutStateFunc);

export { useLayoutProvider };

export const useLayoutState = (): ReturnType<typeof layoutStateFunc> =>
  useLayoutInject()!;
