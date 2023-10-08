<script setup lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
</script>
<template>
  <a-dropdown>
    <span
      hover="bg-[var(--hover-color)]"
      flex
      items-center
      h-48px
      px-12px
      cursor-pointer
      class="transition-all-300"
    >
      <a-avatar mr-8px size="small">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <span class="anticon">HavocZhang</span>
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item key="logout"> 退出登录 </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
