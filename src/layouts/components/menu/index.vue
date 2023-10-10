<script setup lang="ts">
import { useLayoutState } from '../../basic-layout/context'
import SubMenu from './sub-menu.vue'

const { collapsed, selectedMenus, selectedKeys, openKeys, handleOpenKeys, handleSelectedKeys, handleMenuSelect } = useLayoutState()
</script>

<template>
  <a-menu
    :selected-keys="selectedKeys"
    :open-keys="collapsed ? [] : openKeys"
    mode="inline"
    theme="dark"
    :collapsed="collapsed"
    @update:open-keys="handleOpenKeys"
    @update:selected-keys="handleSelectedKeys"
    @select="handleMenuSelect"
  >
    <template v-for="item in selectedMenus">
      <template v-if="!item.hideInMenu">
        <SubMenu :key="item.path" :item="item" />
      </template>
    </template>
  </a-menu>
</template>
