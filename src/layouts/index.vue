<template>
  <BaseLayout
    :collapsed="layoutSetting.collapsed"
    @update:collapsed="appStore.toggleCollapsed"
  >
    <a-watermark h-full flex flex-col flex-1 content="后台管理系统">
      <RouterView>
        <template #default="{ Component }">
          <component :is="Component" />
        </template>
      </RouterView>
    </a-watermark>
  </BaseLayout>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import BaseLayout from "./basic-layout/index.vue";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { layoutSetting } = storeToRefs(appStore);
</script>

<style scoped></style>
