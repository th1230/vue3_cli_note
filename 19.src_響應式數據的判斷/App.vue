<template>
  <div class="app">
    <h1>車的名子:{{ car.name }}---車的價格:{{ car.price }}</h1>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
  readonly,
} from "vue";

export default {
  name: "App",
  setup() {
    let car = reactive({ name: "benz", price: "40萬" });
    let num = ref(0);
    let car2 = readonly(car);

    console.log(isRef(num));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    // readonly不會將響應是對象轉換為原始對象，所以一來檢查的到底層的proxy
    console.log(isProxy(car2));

    return { car };
  },
  components: {},
};
</script>

<style lang="scss">
.app {
  padding: 20px;
  background-color: rgb(142, 142, 142);
}
</style>
