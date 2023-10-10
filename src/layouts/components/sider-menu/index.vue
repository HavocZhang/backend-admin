<script setup lang="ts">
import { useLayoutState } from '../../basic-layout/context'
import Menu from '../menu/index.vue'

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
  >
    <div class="layout-sider-fixed-logo">
      <a>
        <img src="/logo.png">
      </a>
    </div>
    <div class="flex-1 of-x-hidden of-y-auto scrollbar">
      <Menu />
    </div>
  </a-layout-sider>
</template>

<style lang="less" scoped>
.layout-sider-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  &-logo{
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    cursor: pointer;
    transition: padding .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    >a{
      display:flex;
      align-items: center;
      justify-content: center;
      min-height: 32px;
    }

    img{
      display: inline-block;
      height: 32px;
      vertical-align: middle;
    }

    h1{
      display: inline-block;
      height: 32px;
      margin: 0 0 0 12px;
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      vertical-align: middle;
      animation: pro-layout-title-hide .3s;
    }
  }
}
</style>
