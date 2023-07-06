<script setup>
//read JSON file from local thi4form.json
import thi4form from './thi4form.json';
// read value from thi4form
const preFilledText = thi4form['preFilledText'];

async function submit() {
  await new Promise(r => setTimeout(r, 1000))
  alert('Submitted! 🎉')
}

</script>

<template>
  <div class="your-first-form">
    <img src="https://www.thindex.or.th/Content/assets/img/logo_big.png" alt="THi4Index Logo" width="244" height="50"
      class="logo">
    <h2>Question 1: What is the question?</h2>
    <h3>Guideline: Tell me more...</h3>
    <FormKit #default="{ value }" type="form" @submit="submit" id="processForm" submit-label="Submit to see the errors"
      help="hello">
      <FormKit id="repeater" name="processes" type="repeater" label="Processes" add-label="Add Another Process" :value= preFilledText >
        <FormKit type="text" label="Process" name="process_name" validation="required"
          placeholder="Add another process..." />
      </FormKit>
      <pre wrap>value == {{ value }} </pre>
      <pre wrap>preFilledText == {{ preFilledText }} </pre>
    </FormKit>
  </div>
</template>

<style scoped>
.your-first-form {
  width: calc(100% - 1em);
  max-width: 480px;
  box-sizing: border-box;
  padding: 2em;
  box-shadow: 0 0 1em rgba(0, 0, 0, .1);
  border-radius: .5em;
  margin: 4em auto;
}

.logo {
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto 2em auto;
}

pre {
  background-color: rgba(0, 100, 250, .1);
  padding: 1em;
}
</style>
