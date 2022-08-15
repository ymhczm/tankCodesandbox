/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-12 17:13:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 10:15:47
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
const app = createApp(App);
console.log("router:", router);
app.use(router);
app.mount("#app");
