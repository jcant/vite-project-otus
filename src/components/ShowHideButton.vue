<script setup>
import { ref } from "vue";

defineProps({
  caption: String,
  // onClick: function,
});

// const caption = ref("QWERTY");
</script>

<template>
  <input type="button" class="btn" :value="caption" />
</template>

<style scoped>
.btn {
  color: rgb(10, 113, 79);
  background-color: aquamarine;
}
</style>
