<script setup lang="ts">
import wxFrom from "./components/wxFrom.vue";
import accountFrom from "./components/accountFrom.vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

const currentTab = ref(0);

const tabs = [
  {
    btnName: "微信登录",
    component: accountFrom,
  },
  {
    btnName: "手机号/邮箱登录",
    component: wxFrom,
  },
];

const btnName = computed(() => {
  return tabs[currentTab.value].btnName;
});

const switchTab = () => {
  currentTab.value = currentTab.value === 0 ? 1 : 0;
};
</script>
<template>
  <div class="login h-screen flex">
    <div class="w-50%">
      <a-carousel arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </div>
    <div class="w-50% flex-center">
      <div class="w-100 p-4">
        <div class="mb-8 font-size-6">欢迎使用后台管理系统</div>
        <Transition name="fade" mode="out-in">
          <component :is="tabs[currentTab].component" />
        </Transition>
        <a-divider plain>或</a-divider>
        <a-button block @click="switchTab" size="large">
          {{ btnName }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
:deep(.slick-slide) {
  text-align: center;
  height: 100vh;
  background: #1677ff;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
