<template>
  <h1>sum的值為:{{ sum }}</h1>
  <button @click="sum++">點我sum+1</button>
  <hr />

  <h1>人員訊息--姓名:{{ name }}</h1>
  <h1>人員訊息--年齡:{{ age }}</h1>
  <h1>人員訊息--薪資:{{ job.j1.salary }}</h1>
  <h1>人員訊息--車:{{ person.car }}</h1>

  <button @click="name += '~'">點我修改姓名</button>
  <button @click="age++">點我增加年齡</button>
  <button @click="job.j1.salary += 1000">點我增加薪資</button>
  <button @click="showRawReactive">展示最原始的person數據</button>

  <button @click="addCar">person中加一個CAR</button>
  <button @click="person.car.name += '~'">修改person中CAR的name</button>
  <button @click="addPrice">修改person中CAR的price</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "@vue/reactivity";

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

    function showRawReactive() {
      const p = toRaw(person);
      console.log(p);

      //toRaw對ref的響應式數據無效
      // const sum = toRaw(sum);
      // console.log(sum);
    }

    function addCar() {
      let car = { name: "benz", price: 40 };
      // person.car = car;
      //將car這個物件標記不需要響應式，以後car中的所有屬性都不會有響應式
      person.car = markRaw(car);
    }

    function addPrice() {
      person.car.price++;
      console.log(person.car);
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawReactive,
      addCar,
      addPrice,
    };
  },
};
</script>

<style></style>
