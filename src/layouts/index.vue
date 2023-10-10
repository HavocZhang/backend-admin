<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseLayout from './basic-layout/index.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { layoutSetting } = storeToRefs(appStore)
</script>

<template>
  <BaseLayout
    :collapsed="layoutSetting.collapsed"
    @update:collapsed="appStore.toggleCollapsed"
  >
    <template #headerActions>
      <MessageBox />
      <UserAvatar />
    </template>
    <a-watermark h-full flex flex-col flex-1 content="后台管理系统">
      <RouterView>
        <template #default="{ Component }">
          <component :is="Component" />
        </template>
      </RouterView>
    </a-watermark>
  </BaseLayout>
</template>

<style scoped></style>
