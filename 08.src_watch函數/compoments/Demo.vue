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
    let person = reactive({
      name: "張三",
      age: 25,
      job: {
        j1: {
          salary: 35000,
        },
      },
    });

    // 情況一: 監視ref所定義的一個響應式數據
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log("sum的新值:" + newValue + ",sum的舊值:" + oldValue);
    //   },
    //   { immediate: true }
    // );

    // 情況二: 監視ref所定義的多個響應式數據
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log(
    //       "sum與msg的新值:" + newValue + "\nsum與msg的舊值:" + oldValue
    //     );
    //   },
    //   { immediate: true }
    // );

    /* 
      情況三: 監視reactive所定義的一個響應式數據，
          注意: 此處無法正確獲得oldvalue
          注意: 強制開啟深度監視(deep配置無效)
    */
    /* watch(
      person,
      (newValue, oldValue) => {
        console.log("person變化了:", newValue, oldValue);
      },
      { deep: false }
    ); */

    //情況四: 監視reactive所定義的一個響應式數據中的某個屬性
    /* watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log("person中age變化了:", newValue, oldValue);
      }
    ); */

    //情況五: 監視reactive所定義的一個響應式數據中的某些屬性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log("person中name或age變化了:", newValue, oldValue);
    // });

    //特殊情況
    // watch(
    //   () => person.job,
    //   (newValue, oldValue) => {
    //     console.log("person中job變化了:", newValue, oldValue);
    //   },
    //   { deep: true }
    // ); // 此處由於監視的是reactive定義的對象中的某個屬性(該屬性是一個對象)，所以deep配置有效

    return { sum, msg, person };
  },
};
</script>

<style></style>
