<template>
  <button @click="isShowDemo = !isShowDemo">開關Demo組件</button>
  <Demo v-if="isShowDemo" />
</template>

<script>
import { ref } from "vue";
import Demo from "./compoments/Demo";

export default {
  name: "App",
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo };
  },
  components: { Demo },
};
</script>

<style lang="scss"></style>
