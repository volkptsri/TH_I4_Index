<script setup>
  import OneProcessInfo from "./OneProcessInfo.vue";
  import { ref } from "vue";
  const x = ref(undefined);
  const props = defineProps(["process_names"]);
  const process_names = JSON.parse(props.process_names);
  const submitted = ref(false);
  const production_line_value = ref(null);
  async function submitHandler() {
    await new Promise((r) => setTimeout(r, 1000));
    alert("Final Section Submitted! 🎉");
    submitted.value = true;
  }
</script>

<template>
  <div v-for="(process_name, index) in process_names">
    <OneProcessInfo :process_name="`${process_name}`" :index="`${index + 1}`" />
  </div>
  <hr />
  <h2>คำถามองค์รวมของ Production Line</h2>
  <FormKit
    type="form"
    :actions="false"
    #default="{ value }"
    submit-label="ส่งข้อมูลองค์รวมของ Production Line"
    v-if="!submitted"
    @submit="submitHandler"
  >
    <h4>1. Network Band 3 --- Inter-operable</h4>
    <FormKit
      type="checkbox"
      label="เชื่่อมต่อ Network ไม่น้อยกว่า 80%"
      help="The Factory Network ครอบคลุมการทำงานของ Machines ไม่น้อยกว่า 80%"
      id="network_band_3"
      name="network_band_3"
    />
    <h4>2. Network Band 5 --- Cyber Security</h4>
    <FormKit
      type="checkbox"
      label="5 Criteria"
      help="Cyber Security"
      id="network_band_5"
      name="network_band_5"
      :options="['one', 'two', 'three', 'four', 'five']"
      disabled="true"
    />
    <h4>3. Network Band 6 --- Scalable</h4>
    <FormKit
      type="checkbox"
      label="Scalable"
      help="Scalable"
      id="network_band_5"
      name="network_band_5"
      disabled="true"
    />
    <h4>4. Automation Band 5 --- Flexible Automation</h4>
    <FormKit
      type="checkbox"
      label="Some Criteria"
      help="Note:!Manual -> เก็บข้อมูล ใช้คน Switch Over ไหม?Duration of the Process (Ma ) Human Intervention (Mins.)"
      id="automation_band_5"
      name="automation_band_5"
      :options="['one', 'two', 'three', 'four', 'five']"
      disabled="true"
    />
    <h4>5. Automation Band 6 --- 3-Platform Integration</h4>
    <FormKit
      type="checkbox"
      label="3-Platform Integration"
      help="ถามคำถามตอนท้ายสุดหลังจากถามมิติ Enterprise + Facility Automation แล้ว โดยAutomationทั้งสาม Bands ต้อง >= 5"
      id="automation_band_6"
      name="automation_band_6"
      disabled="true"
    />
    <FormKit type="submit" label="ส่งข้อมูลองค์รวมของ Production Line" />
    <pre wrap>
        {{ (production_line_value = value) }}
    </pre>
  </FormKit>
  <div v-if="submitted">
    <h2>องค์รวมของ Production Line</h2>
    <pre wrap>
        {{ production_line_value }}
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
