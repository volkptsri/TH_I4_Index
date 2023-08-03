<script setup>
import ProcessesInfo from "./ProcessesInfo.vue";
import { ref } from "vue";
const submitted_1 = ref(false);
const process_data = ref(null);
const process_names = ref(null);
async function submitHandler1() {
  await new Promise((r) => setTimeout(r, 1000));
  alert("First Section Submitted! 🎉");
  submitted_1.value = true;
}
</script>

<template>
  <div class="my-form">
    <img
      src="https://www.thindex.or.th/Content/assets/img/logo_big.png"
      alt="THi4Index Logo"
      width="244"
      height="50"
      class="logo"
    />
    <FormKit
      type="form"
      v-if="!submitted_1"
      :actions="false"
      #default="{ value }"
      submit-label="Continue"
      @submit="submitHandler1"
      id="form1"
      name="form1"
    >
      <FormKit
        id="process_list"
        name="process_list"
        type="repeater"
        label="Process"
        help="กรุณากรอกรายการกระบวนการผลิต"
        :insert-control="true"
        #default="{ index, value }"
      >
        <FormKit
          :label="`${index + 1}. ชื่อกระบวนการผลิต (Process Name)`"
          type="text"
          name="process_name"
          :value="`Process ${index + 1}`"
        />
        <FormKit
          type="radio"
          :name="`${index + 1}_process_type`"
          :id="`${index + 1}_process_type`"
          label="Type ของกระบวนการ"
          :options="['Production', 'Transport']"
        />
        <FormKit type="checkbox" name="hasQC" label="มีกระบวนการ QC หรือไม่?" />
        <FormKit
          v-if="value.hasQC"
          name="process_qcs"
          id="process_qcs"
          type="repeater"
          label="QCs"
          #default="{ index }"
        >
          <FormKit
            :label="`${index + 1}. QC`"
            name="qc"
            validation="required"
            :value="`QC ที่ ${index + 1}`"
          />
        </FormKit>
      </FormKit>
      <FormKit type="submit" label="Continue" />
      <pre wrap>
          {{ (process_data = value) }}
      </pre>
    </FormKit>
    <div v-if="submitted_1">
      <h2>ข้อมูล The List of Processes</h2>
      <pre wrap>
          {{ process_data }}
      </pre>
      <h2>รายชื่อ Processes ในโรงงาน</h2>
      <pre wrap>
        {{
          (process_names = process_data.process_list.map(
            (process) => process.process_name
          ))
        }}
      </pre>
      <ProcessesInfo :process_names="JSON.stringify(process_names)" />
    </div>
  </div>
</template>

<style scoped>
.my-form {
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
