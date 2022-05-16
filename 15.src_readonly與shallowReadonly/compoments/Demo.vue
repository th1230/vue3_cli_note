<template>
  <h1>sum的值為:{{ sum }}</h1>
  <button @click="sum++">點我sum+1</button>
  <hr />

  <h1>人員訊息--姓名:{{ name }}</h1>
  <h1>人員訊息--年齡:{{ age }}</h1>
  <h1>人員訊息--薪資:{{ job.j1.salary }}</h1>

  <button @click="name += '~'">點我修改姓名</button>
  <button @click="age++">點我增加年齡</button>
  <button @click="job.j1.salary += 1000">點我增加薪資</button>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  readonly,
  shallowReadonly,
} from "@vue/reactivity";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "張三",
      age: 25,
      job: {
        j1: {
          salary: 35000,
        },
      },
    });

    person = readonly(person);
    // person = shallowReadonly(person);
    // sum = readonly(sum);
    // sum = shallowReadonly(sum);

    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
