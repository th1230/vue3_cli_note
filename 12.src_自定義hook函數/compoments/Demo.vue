<template>
  <h1>當前總和為:{{ sum }}</h1>
  <button @click="sum++">點我+1</button>

  <h1>滑鼠所點擊的位置 x:{{ point.x }} , y:{{ point.y }}</h1>
</template>

<script>
import { ref } from "@vue/reactivity";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = usePoint();
    return { sum, point };
  },
};
</script>

<style></style>
