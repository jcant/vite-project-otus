<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  age: Number,
});
</script>

<template>
  <div class="user-item">
    <div class="user-name">{{ name }}</div>
    <div class="user-age">{{ age }}</div>
  </div>
</template>

<style scoped>
.user-item {
  color: rgb(10, 113, 79);
  background-color: aquamarine;
}
.user-name {
  color: chocolate;
  /* background-color: aquamarine; */
}
.user-age {
  color: chocolate;
  /* background-color: aquamarine; */
}
</style>
