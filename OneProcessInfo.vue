<script setup>
import { ref } from "vue";
const props = defineProps(["process_name", "index"]);
const process_name = props.process_name;
const index = props.index;
const submitted = ref(false);
const process_value = ref(null);
async function submitHandler() {
  await new Promise((r) => setTimeout(r, 1000));
  alert(process_name + " Section Submitted! 🎉");
  submitted.value = true;
}
</script>

<template>
  <hr />
  <FormKit
    type="form"
    :actions="false"
    #default="{ value }"
    :submit-label="`ส่งข้อมูล ${process_name}`"
    v-if="!submitted"
    @submit="submitHandler"
  >
    <h2>กระบวนการที่ {{ `${index}` }} : {{ process_name }}</h2>
    <h3>*** Production Automation ***</h3>
    <h4>1. Support or Production Process</h4>
    <FormKit
      type="radio"
      :label="`${process_name} คือ Support หรือ Production?`"
      help="เลือก Support or Production"
      :options="['Support', 'Production']"
      id="pa_process_type"
      name="pa_process_type"
    />
    <h4>2. Manual and Semi and Fully</h4>
    <h5 class="gray">
      Sum =
      {{
        parseFloat(value.pa_manual_process) +
        parseFloat(value.pa_semi_process) +
        parseFloat(value.pa_fully_process)
      }}%
    </h5>
    <h5
      class="valid"
      v-if="
        parseFloat(value.pa_manual_process) +
          parseFloat(value.pa_semi_process) +
          parseFloat(value.pa_fully_process) ==
        100.0
      "
    >
      Valid: Sum == 100%
    </h5>
    <h5
      class="not-valid"
      v-if="
        parseFloat(value.pa_manual_process) +
          parseFloat(value.pa_semi_process) +
          parseFloat(value.pa_fully_process) !=
        100.0
      "
    >
      Not-Valid: Sum != 100%
    </h5>
    <FormKit
      type="number"
      label="Manual (%)"
      help="ให้ตอบเป๊น เลข ไม่ต้องมี %"
      id="pa_manual_process"
      name="pa_manual_process"
      :value="0"
    />
    <FormKit
      type="number"
      label="Semi (%)"
      help="ให้ตอบเป๊น เลข ไม่ต้องมี %"
      id="pa_semi_process"
      name="pa_semi_process"
      :value="0"
    />
    <FormKit
      type="number"
      label="Fully (%)"
      help="ให้ตอบเป๊น เลข ไม่ต้องมี %"
      id="pa_fully_process"
      name="pa_fully_process"
      :value="0"
    />
    <h3>*** Production Network ***</h3>
    <h4>1. Network Connection Types by Percentages</h4>
    <h5 class="gray">
      Sum =
      {{
        parseFloat(value.pn_machine_oriented) +
        parseFloat(value.pn_human_oriented) +
        parseFloat(value.pn_not_connected)
      }}%
    </h5>
    <h5
      class="valid"
      v-if="
        parseFloat(value.pn_machine_oriented) +
          parseFloat(value.pn_human_oriented) +
          parseFloat(value.pn_not_connected) ==
        100.0
      "
    >
      Valid: Sum == 100%
    </h5>
    <h5
      class="not-valid"
      v-if="
        parseFloat(value.pn_machine_oriented) +
          parseFloat(value.pn_human_oriented) +
          parseFloat(value.pn_not_connected) !=
        100.0
      "
    >
      Not-Valid: Sum != 100%
    </h5>
    <FormKit
      type="number"
      label="Machine-Oriented (%)"
      help="Machine-Oriented == 0% -> ไม่มี Automatic Data Transfer"
      id="pn_machine_oriented"
      name="pn_machine_oriented"
      :value="1"
    />
    <FormKit
      type="number"
      label="Human-Oriented (%)"
      help="ให้ตอบเป๊น เลข ไม่ต้องมี %"
      id="pn_human_oriented"
      name="pn_human_oriented"
      :value="0"
    />
    <FormKit
      type="number"
      label="Not-Connected (%)"
      help="Not-Connected == 100% ตอบ No Security, No Smart"
      id="pn_not_connected"
      name="pn_not_connected"
      :value="0"
    />
    <div v-if="value.pn_machine_oriented != 0">
      <h4>2. Percentage of Automatic Data Transfer</h4>
      <FormKit
        type="number"
        label="Automatic Data Transfer (%)"
        help="ให้ตอบเป๊นเลข ไม่ต้องมี %"
        id="pn_auto_data_transfer"
        name="pn_auto_data_transfer"
      />
    </div>
    <div v-if="value.pn_not_connected != 100">
      <h3>*** Smart Production ***</h3>
      <h4>1. Notifiability by Percentage</h4>
      <FormKit
        type="number"
        label="Notifiable (%)"
        help="ให้ตอบเป๊นเลข ไม่ต้องมี %"
        id="sp_notifiable"
        name="sp_notifiable"
      />
      <h4>2. Analytical Capability by Percentage</h4>
      <FormKit
        type="number"
        label="Analytical (%)"
        help="ให้ตอบเป๊นเลข ไม่ต้องมี %"
        id="sp_analytical"
        name="sp_analytical"
      />
      <h4>3. Precaution Enabled</h4>
      <FormKit
        type="number"
        label="Precaution (%)"
        help="ให้ตอบเป๊นเลข ไม่ต้องมี %"
        id="sp_precaution"
        name="sp_precaution"
      />
      <h4>4. Forecastable and Adaptable</h4>
      <FormKit
        type="number"
        label="Forecastable and Adaptable (%)"
        help="ให้ตอบเป๊นเลข ไม่ต้องมี %"
        id="sp_adaptable"
        name="sp_adaptable"
      />
    </div>
    <FormKit type="submit" :label="`ส่งข้อมูล ${process_name}`" />
    <pre wrap>
      ข้อมูลของ {{ process_name }}  == {{ (process_value = value) }}
    </pre>
  </FormKit>
  <div v-if="submitted">
    <h2>ข้อมูล {{ process_name }}</h2>
    <pre wrap>
        {{ process_value }}
    </pre>
  </div>
  <hr />
</template>

<style scoped>
pre {
  background-color: rgba(0, 100, 250, 0.1);
  padding: 1em;
}
</style>

<style>
.valid,
.not-valid,
.gray {
  padding: 0.5em;
  color: white;
  margin: 1em 0;
  border-radius: 5px;
}
.not-valid {
  background-color: darkred;
}
.valid {
  background-color: green;
}
.gray {
  background-color: gray;
}
</style>
