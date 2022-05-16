<template>
  <div class="son">
    <h1>我是Son組件</h1>
    <h1>車的名子:{{ car.name }}---車的價格:{{ car.price }}</h1>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Son",
  setup() {
    const car = inject("car");

    return { car };
  },
};
</script>

<style>
.son {
  padding: 20px;
  background-color: rgb(164, 229, 50);
}
</style>
