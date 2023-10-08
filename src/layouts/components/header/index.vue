<script setup lang="ts">
import { useLayoutState } from "../../basic-layout/context";
const { headerHeight } = useLayoutState();
</script>
<template>
  <a-layout-header
    :style="{
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      paddingInline: `${0}px `,
    }"
  >
    <div class="global-header">
      <div class="flex-1 overflow-x-auto">
        <slot name="headerContent" />
      </div>
      <a-space align="center" flex-shrink-0>
        <slot name="headerActions" />
      </a-space>
    </div>
  </a-layout-header>
</template>
<style lang="less" scoped>
.global-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  > * {
    height: 100%;
  }
}
.fixed-header {
  position: fixed;
  top: 0;

  &-inverted {
    --hover-color: rgb(42, 44, 55);
  }

  &-action {
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
