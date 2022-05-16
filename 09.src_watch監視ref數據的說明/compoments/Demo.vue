<template>
  <h1>當前總和為:{{ sum }}</h1>
  <button @click="sum++">點我+1</button>

  <h1>當前訊息為:{{ msg }}</h1>
  <button @click="msg += '!'">點我修改訊息</button>

  <h1>人員訊息--姓名:{{ person.name }}</h1>
  <button @click="person.name += '~'">點我修改姓名</button>

  <h1>人員訊息--年齡:{{ person.age }}</h1>
  <button @click="person.age++">點我增加年齡</button>

  <h1>人員訊息--年齡:{{ person.job.j1.salary }}</h1>
  <button @click="person.job.j1.salary += 1000">點我增加薪資</button>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
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

    // 此處監視的是refImpL中的value值(單層的數據變化)，是一個物件，只要這個物件的地址不變就監測不到，所以需要使用deep配置來監測深層的數據變化
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person的值發生變化", newValue, oldValue);
      },
      { deep: true }
    );

    return { sum, msg, person };
  },
};
</script>

<style></style>
