<template>
  <h1>人員訊息</h1>
  <h1>姓名:{{ name }}</h1>
  <h1>年齡:{{ age }}</h1>
  <h1>性別:{{ sex }}</h1>
  <h1>a:{{ a }}</h1>

  <button @click="sayWelcome">說話(Vue2所配置的 sayWelcome)</button>
  <br /><br />
  <button @click="sayHello">說話(Vue3所配置的 sayHello)</button>
  <br /><br />
  <button @click="test1">測試一下Vue2的方法中調用Vue3的配置</button>
  <br /><br />
  <button @click="test2">測試一下Vue3 setup的方法中調用Vue2的配置</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sex: "男",
      a: 100,
    };
  },
  methods: {
    sayWelcome() {
      console.log("welcome");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    },
  },
  // 此處只是測試儀下setup，暫時不考慮響應式的問題
  setup() {
    //數據
    let name = "thomas";
    let age = 20;
    let a = 200;

    //方法
    function sayHello() {
      console.log("hello");
    }

    function test2() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
      console.log(this.sex);
      console.log(this.sayWelcome);
    }
    //返回一個對象(常用)
    return {
      name,
      age,
      sayHello,
      test2,
      a,
    };

    //返回一個渲染函數(了解)
    // return (h) => h("h1", "測試");
  },
  components: {},
};
</script>

<style lang="scss"></style>
