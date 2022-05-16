<template>
  <h1>人員訊息</h1>
  <!-- 當解析模板時發現數據是響應式ref引用對象的話，就會自動調用底下的value屬性獲取值 -->
  <h1>姓名:{{ name }}</h1>
  <h1>年齡:{{ age }}</h1>
  <h1>工作:{{ job.type }}</h1>
  <h1>薪水:{{ job.salary }}</h1>

  <button @click="changeInfo">改變訊息</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    let name = ref("thomas");
    let age = ref(20);
    let job = ref({
      type: "前端工程師",
      salary: "30k",
    });

    function changeInfo() {
      // name.value = "張三";
      // age.value = 30;
      // job.value.type = "UI設計師";
      // job.value.salary = "32K";
      console.log(job.value);
      // console.log(name, age);
    }
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
  components: {},
};
</script>

<style lang="scss"></style>
