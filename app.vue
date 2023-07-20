<script setup>
//read JSON file from local thi4form.json
import thi4form from "./thi4form.json";
// read value from thi4form

async function submit() {
  await new Promise((r) => setTimeout(r, 1000));
  alert("Submitted! 🎉");
}
</script>

<script>
const thischema = [
  {
    $formkit: "radio",
    name: "one",
    label: "คำถามที่ ๑ Your 1st Industrial Input คำถามที่ ๑",
    options: "12345",
    help: "คำถามที่ ๑ This will be used for your Your 1st Input.",
    validation: "required",
  },
  {
    $formkit: "radio",
    name: "two",
    label: "คำถามที่ ๒ Your 2nd Industrial Input คำถามที่ ๒",
    options: "abcd",
    help: "คำถามที่ ๒ This will be used for your Your 2st Input.",
    validation: "required",
  },
  {
    $formkit: "text",
    name: "three",
    label: "คำถามที่ ๓ Your 3rd Industrial Input คำถามที่ ๓",
    help: "คำถามที่ ๓ This will be used for your Your 3rd Input.",
    validation: "required",
  },
  {
    $formkit: "checkbox",
    name: "four",
    label: "คำถามที่ 4 คำถามที่ 4 คำถามที่ 4",
    options: {
      1: "one",
      2: "two",
      3: "three",
    },
    help: "คำถามที่ 4 This will be used for your Your 4rd Input.",
    validation: "required",
  },
  {
    $cmp: "FormKit",
    props: {
      name: "thi4_index",
      type: "checkbox",
      id: "thi4_index",
      label: "ไปกับเราไหม? Are you ready to begin with Thailand i4.0 Index?",
    },
  },
  {
    $formkit: "radio",
    if: "$get(thi4_index).value", // conditional Logic!
    name: "client_notice",
    label: "เรากำลังคิดว่า...",
    options: {
      chill: "สบายๆ",
      manufacture: "ผลิต",
      smart: "ดี",
    },
    help: "How often should we display a cookie notice?",
  },
];
export default {
  emits: ["pointerenter", "pointerleave"],
  data() {
    return {
      data: {},
      schema: thischema,
    };
  },
  methods: {
    async register() {
      await new Promise((r) => setTimeout(r, 2000));
      alert("Account created!");
    },
  },
};
</script>

<template>
  <div class="your-first-form">
    <img
      src="https://www.thindex.or.th/Content/assets/img/logo_big.png"
      alt="THi4Index Logo"
      width="244"
      height="50"
      class="logo"
    />

    <FormKit type="form" v-model="data" @submit="register">
      <FormKitSchema :schema="schema" />
    </FormKit>
    <pre wrap>{{ data }}</pre>
  </div>
</template>

<style scoped>
.your-first-form {
  width: calc(100% - 1em);
  max-width: 480px;
  box-sizing: border-box;
  padding: 2em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  margin: 4em auto;
}

.logo {
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto 2em auto;
}

pre {
  background-color: rgba(0, 100, 250, 0.1);
  padding: 1em;
}
</style>
