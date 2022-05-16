<template>
  <h1>人員訊息</h1>
  <h1>姓名:{{ person.name }}</h1>
  <h1>年齡:{{ person.age }}</h1>
  <h1>工作:{{ person.job.type }}</h1>
  <h1>薪水:{{ person.job.salary }}</h1>
  <h1>c:{{ person.job.a.b.c }}</h1>
  <h1>興趣:{{ person.hobby[0] }}</h1>

  <button @click="changeInfo">改變訊息</button>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "App",
  setup() {
    //數據
    let person = reactive({
      name: "thomas",
      age: 20,
      job: {
        type: "前端工程師",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["吃美食", "購物", "打遊戲"],
    });

    //方法
    function changeInfo() {
      person.name = "張三";
      person.age = 30;
      person.job.type = "UI設計師";
      person.job.salary = "32K";
      person.job.a.b.c = 999;
      person.hobby[0] = "逛街";
    }
    return {
      person,
      changeInfo,
    };
  },
  components: {},
};
</script>

<style lang="scss"></style>
