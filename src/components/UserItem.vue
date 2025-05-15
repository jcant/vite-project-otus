<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  age: Number,
  showAge: Boolean,
});

let isHovered = ref(false);
</script>

<template>
  <div
    class="user-item"
    :class="isHovered ? 'hovered' : 'not-hovered'"
    @mousemove="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <span>{{ name }}&nbsp;</span>
    <span v-if="showAge">{{ age }}</span>
  </div>
</template>

<style scoped>
.user-item {
  background-color: aqua;
  height: 20pt;
  margin: 6pt;
  font-weight: 800;
  font-size: 14pt;
  cursor: pointer;
  width: 100pt;
}
.hovered {
  color: red;
}
.not-hovered {
  color: black;
}
</style>
