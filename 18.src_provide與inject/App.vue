<template>
  <div class="app">
    <h1>我是App組件</h1>
    <h1>車的名子:{{ car.name }}---車的價格:{{ car.price }}</h1>
    <Child />
  </div>
</template>

<script>
import { reactive, provide } from "vue";
import Child from "./compoments/Child.vue";
export default {
  name: "App",
  setup() {
    let car = reactive({ name: "benz", price: "40萬" });
    provide("car", car);

    return { car };
  },
  components: { Child },
};
</script>

<style lang="scss">
.app {
  padding: 20px;
  background-color: rgb(142, 142, 142);
}
</style>
