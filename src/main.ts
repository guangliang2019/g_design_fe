import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "g-design/src/components/index.less";
import gDesign from "g-design";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "./utils/global.css";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
console.log(gDesign);

createApp(App)
  .use(store)
  .use(router)
  .use(ArcoVue, {
    componentPrefix: "gl",
  })
  .use(gDesign)
  .use(ArcoVueIcon)

  .mount("#app");
