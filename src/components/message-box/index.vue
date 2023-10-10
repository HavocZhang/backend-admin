<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue'

const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]
</script>

<template>
  <a-popover trigger="click">
    <template #content>
      <a-list size="small" bordered :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>{{ item }}</a-list-item>
        </template>
        <template #header>
          <div>Header</div>
        </template>
        <template #footer>
          <div>Footer</div>
        </template>
      </a-list>
    </template>
    <div
      hover="bg-[var(--hover-color)]"
      flex
      items-center
      h-48px
      px-12px
      cursor-pointer
      class="transition-all-300"
    >
      <a-badge :dot="true">
        <BellOutlined />
      </a-badge>
    </div>
  </a-popover>
</template>
