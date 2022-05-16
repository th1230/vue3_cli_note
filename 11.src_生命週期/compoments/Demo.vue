<template>
  <h1>當前總和為:{{ sum }}</h1>
  <button @click="sum++">點我+1</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "@vue/runtime-core";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);

    //組合式api生命週期函數
    onBeforeMount(() => {
      console.log("-----onBeforeMount-----");
    });
    onMounted(() => {
      console.log("-----onMounted-----");
    });
    onBeforeUpdate(() => {
      console.log("-----onBeforeUpdate-----");
    });
    onUpdated(() => {
      console.log("-----onUpdated-----");
    });
    onBeforeUnmount(() => {
      console.log("-----onBeforeUnmount-----");
    });
    onUnmounted(() => {
      console.log("-----onUnmounted-----");
    });
    return { sum };
  },
};
</script>

<style></style>
