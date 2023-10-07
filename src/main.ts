import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/reset.css";
import "uno.css";

const app = createApp(App);
app.use(router);
app.mount("#app");