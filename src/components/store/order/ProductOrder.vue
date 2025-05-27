<script setup>
// import { ref } from "vue";
import OrderInputs from "./OrderInputs.vue";

// const emit = defineEmits(["cancel-order", "success-order"]);
const props = defineProps(["id"]);

// const firstName = ref();
// const lastName = ref();
// const birthday = ref();
// const city = ref();
// const street = ref();
// const houseNumber = ref();
// const cardNumber = ref();
// const rulesConfirm = ref(false);
</script>

<template>
  <div class="mt-6">
    <OrderInputs :id="id" />
  </div>
</template>

<style scoped></style>
