<template>
  <h1>人員訊息--姓名:{{ name }}</h1>
  <h1>人員訊息--年齡:{{ age }}</h1>
  <h1>人員訊息--薪資:{{ job.j1.salary }}</h1>

  <button @click="name += '~'">點我修改姓名</button
  ><button @click="age++">點我增加年齡</button>
  <button @click="job.j1.salary += 1000">點我增加薪資</button>
</template>

<script>
import { reactive, toRef, toRefs } from "@vue/reactivity";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "張三",
      age: 25,
      job: {
        j1: {
          salary: 35000,
        },
      },
    });

    // name1存的只是純粹從person.name中或取的值，不具有響應式
    // const name1 = person.name;
    // console.log("%%%%%", name1);

    // 通過toRef獲取到person中name屬性的值，以RefImpl進行包裹，當對其值進行操作時，person中name的值也會被修改(與person.name是同一個)
    // const name2 = toRef(person, "name");
    // console.log("$$$$$", name2);

    // 通過toRefs可以將person物件的第一層屬性全部進行toRef包裹，返回一個物件對應person中的每一個屬性
    // const x = toRefs(person);
    // console.log("!!!!!", x);

    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary"),
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
