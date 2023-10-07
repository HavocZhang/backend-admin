<template>
  <a-form class="wx-from">
    <a-form-item>
      <div class="flex-center">请使用<a>微信扫码</a>关注公众号即可安全登录</div>
    </a-form-item>
    <a-form-item>
      <div class="flex-center">
        <a-qrcode
          value="http://www.antdv.com"
          status="expired"
          @refresh="() => console.log('refresh')"
        />
      </div>
    </a-form-item>
    <a-form-item>
      <div class="flex-center">
        扫码表示您同意<a href="/terms/license">《服务协议》</a>和<a
          href="/terms/privacy"
          >《隐私政策》</a
        >
      </div>
    </a-form-item>
  </a-form>
</template>
