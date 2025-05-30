<script setup>
const props = defineProps(["label"]);
const inputValue = defineModel("inputValue");
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <div class="flex place-items-center cursor-pointer">
      <input
        type="text"
        class="border border-amber-800 rounded-2xl pl-2 pr-2 p-1"
        v-model.lazy.trim="inputValue"
      />
      <img src="@/assets/search.png" class="w-6 h-6 ml-2" />
    </div>
  </div>
</template>

<style scoped></style>
