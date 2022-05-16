<template>
  <input type="text" v-model="aaa" />
  <h1>input的值是: {{ aaa }}</h1>
</template>

<script>
import { customRef, ref } from "vue";

export default {
  name: "App",
  setup() {
    let aaa = myRef("", 500);

    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        // track: 通知Vue追蹤value的變化，只要value的值改變就重新調用get
        // trigger: 觸發畫面重新渲染(重新解析模板)
        return {
          get() {
            console.log(`有人從myRef中讀取數據，我把${value}給他`);
            track();
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    }
    return { aaa };
  },
  components: {},
};
</script>

<style lang="scss"></style>
