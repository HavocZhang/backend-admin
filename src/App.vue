<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale(zhCN.locale);
</script>

<template>
  <a-config-provider :locale="zhCN">
    <a-app class="h-full font-chinese antialiased">
      <RouterView />
    </a-app>
  </a-config-provider>
</template>
