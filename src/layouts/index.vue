<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseLayout from './basic-layout/index.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const userStore = useUserStore()
const layoutMenu = useLayoutMenu()
const { selectedKeys, openKeys } = storeToRefs(layoutMenu)
const { layoutSetting } = storeToRefs(appStore)
</script>

<template>
  <BaseLayout
    :collapsed="layoutSetting.collapsed"
    :menu-data="userStore.menuData"
    :selected-keys="selectedKeys"
    :open-keys="openKeys"
    @update:open-keys="layoutMenu.handleOpenKeys"
    @update:selected-keys="layoutMenu.handleSelectedKeys"
    @update:collapsed="appStore.toggleCollapsed"
  >
    <template #headerActions>
      <MessageBox />
      <UserAvatar />
    </template>
    <a-watermark h-full flex flex-col flex-1 content="monousoooo">
      <RouterView>
        <template #default="{ Component }">
          <component :is="Component" />
        </template>
      </RouterView>
    </a-watermark>
  </BaseLayout>
</template>

<style scoped></style>
