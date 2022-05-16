<template>
  <h1>人員訊息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年齡:{{ person.age }}</h2>
  <h2>msg:{{ props.Msg }}</h2>
  <h2>subject:{{ props.Subject }}</h2>

  <slot name="aaa"></slot>
  <br />
  <slot name="bbb"></slot>
  <button @click="sendHelloEvent">發送一個hello事件</button>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Demo",
  props: ["Msg", "Subject"],
  emits: ["hello"],
  setup(props, context) {
    // console.log("---setup---", props); // 獲取props，同樣需要定義props否則會報警告(沒有錯誤)
    // console.log("---setup---", context); // 為一個物件，包含一些常用的函數
    // console.log("---setup---", context.attrs); // 接收props沒定義名稱的值，與vue2功能相同
    // console.log("---setup---", context.emit); // 觸發自定義事件

    const person = reactive({
      name: "thomas",
      age: 25,
    });

    function sendHelloEvent() {
      context.emit("hello", 666);
    }

    return { person, sendHelloEvent, props };
  },
};
</script>

<style></style>
