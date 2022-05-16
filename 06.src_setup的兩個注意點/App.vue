<template>
  <Demo @hello="handleHello" :Msg="msg" :Subject="subject">
    <template v-slot:aaa>
      <h1>aaa</h1>
    </template>

    <template v-slot:bbb>
      <h1>bbb</h1>
    </template>
  </Demo>
</template>

<script>
// import { reactive, ref } from "vue";
import Demo from "./compoments/Demo";

export default {
  name: "App",
  setup() {
    //數據
    let msg = "你好阿";
    let subject = "Vue3";
    //方法
    function handleHello(value) {
      console.log(`哈摟你好你觸發了hello事件，所傳的值是${value}`);
    }

    return { msg, subject, handleHello };
  },
  components: { Demo },
};
</script>

<style lang="scss"></style>
