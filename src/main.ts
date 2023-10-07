import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./router/router-guard";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/reset.css";
import "uno.css";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
