import { createApp } from "vue";
// Vue構造還函數在Vue3已經不能夠獲取
// import Vue from "vue";
import App from "./App.vue";

// app類似於原本vue2的vm，只是更加的輕量化，且不是使用構造函數建構
const app = createApp(App);
// mount(#app) 與 vue2的 $mount 同效果
app.mount("#app");
