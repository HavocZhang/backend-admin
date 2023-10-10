<script setup lang="ts">
import SiderMenu from '../components/sider-menu/index.vue'
import Header from '../components/header/index.vue'
import { useLayoutProvider } from './context'
import { LayoutProps } from './typing'

const props = defineProps(LayoutProps)
const emit = defineEmits(['update:collapsed'])

/**
 * 处理展开收起的事件参数
 * @param collapsed 展开收起的事件参数
 */
const handleCollapsed = (collapsed: boolean) => {
  emit('update:collapsed', collapsed)
  props?.onCollapsed?.(collapsed)
}

useLayoutProvider(props, {
  handleCollapsed,
})
</script>

<template>
  <div class="basic-layout">
    <a-layout>
      <SiderMenu />
      <a-layout>
        <Header>
          <template #headerActions>
            <slot name="headerActions" />
          </template>
        </Header>
        <a-layout-content class="basic-layout-content" flex flex-col>
          <div class="h-full flex flex-col flex-1">
            <slot />
          </div>
        </a-layout-content>
        <a-layout-footer />
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="less" scoped>
.basic-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  &-content {
    margin: 24px;
    display: flex;
  }
}
</style>
