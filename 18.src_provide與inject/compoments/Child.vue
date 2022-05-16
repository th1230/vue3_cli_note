<template>
  <div class="child">
    <h1>我是Child組件</h1>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  setup() {},
  components: { Son },
};
</script>

<style lang="scss">
.child {
  padding: 20px;
  background-color: rgb(241, 97, 97);
}
</style>
