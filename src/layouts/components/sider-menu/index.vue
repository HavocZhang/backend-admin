<script setup lang="ts">
import { useLayoutState } from '../../basic-layout/context'

const { collapsedWidth, siderWidth, collapsed, handleCollapsed }
  = useLayoutState()
</script>

<template>
  <div
    :style="{
      width: collapsed ? `${collapsedWidth}px` : `${siderWidth}px`,
      maxWidth: collapsed ? `${collapsedWidth}px` : `${siderWidth}px`,
      minWidth: collapsed ? `${collapsedWidth}px` : `${siderWidth}px`,
    }"
  />
  <a-layout-sider
    class="layout-sider-fixed"
    :collapsed="collapsed"
    :collapsed-width="collapsedWidth"
    :width="siderWidth"
    collapsible
    @collapse="handleCollapsed"
  />
</template>

<style scoped>
.layout-sider-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
}
</style>
