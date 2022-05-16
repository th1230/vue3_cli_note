<template>
  <h1>人員訊息--姓名:{{ name }}</h1>
  <h1>人員訊息--年齡:{{ age }}</h1>
  <h1>人員訊息--薪資:{{ job.j1.salary }}</h1>

  <button @click="name += '~'">點我修改姓名</button
  ><button @click="age++">點我增加年齡</button>
  <button @click="job.j1.salary += 1000">點我增加薪資</button>
</template>

<script>
import {
  reactive,
  toRef,
  toRefs,
  shallowReactive,
  shallowRef,
} from "@vue/reactivity";
export default {
  name: "Demo",
  setup() {
    //let person = shallowReactive({ // 只考慮第一層數據的響應式
    let person = reactive({
      name: "張三",
      age: 25,
      job: {
        j1: {
          salary: 35000,
        },
      },
    });

    let x = shallowRef({
      y: 0,
    });

    console.log(x);

    return {
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
