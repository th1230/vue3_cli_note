<template>
  <h1>當前總和為:{{ sum }}</h1>
  <button @click="sum++">點我+1</button>

  <h1>當前訊息為:{{ msg }}</h1>
  <button @click="msg += '!'">點我修改訊息</button>

  <h1>人員訊息--姓名:{{ person.name }}</h1>
  <button @click="person.name += '~'">點我修改姓名</button>

  <h1>人員訊息--年齡:{{ person.age }}</h1>
  <button @click="person.age++">點我增加年齡</button>

  <h1>人員訊息--薪資:{{ person.job.j1.salary }}</h1>
  <button @click="person.job.j1.salary += 1000">點我增加薪資</button>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好阿");
    let person = ref({
      name: "張三",
      age: 25,
      job: {
        j1: {
          salary: 35000,
        },
      },
    });

    // 不能監視sum.value因為監視的是一個純值0
    watch(sum, (newValue, oldValue) => {
      console.log("sum的值發生變化", newValue, oldValue);
    });

    // watchEffect所指定的回調中用到的數據只要發生變化，則直接重新執行回調
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.age;
      console.log("watchEffect配的回調執行了");
    });

    return { sum, msg, person };
  },
};
</script>

<style></style>
