<template>
  <h1>人員訊息</h1>
  姓: <input type="text" v-model="person.firstname" /> <br />
  名: <input type="text" v-model="person.lastname" /><br />
  <span>全名:{{ person.fullname }}</span
  ><br />
  全名: <input type="text" v-model="person.fullname" />
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "Demo",
  setup() {
    const person = reactive({
      firstname: "張",
      lastname: "三",
    });

    //計算屬性--簡寫(沒有考慮計算屬性被修改的情況)
    // person.fullname = computed(() => {
    //   return person.firstname + "-" + person.lastname;
    // });

    //計算屬性--完整寫法(考慮讀與寫)
    person.fullname = computed({
      get() {
        return person.firstname + "-" + person.lastname;
      },
      set(value) {
        let nameArr = value.split("-");
        person.firstname = nameArr[0];
        person.lastname = nameArr[1];
      },
    });

    return { person };
  },
};
</script>

<style></style>
