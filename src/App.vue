<script setup>
import UserItem from "./components/UserItem.vue";
import { ref } from "vue";

let users = [
  {
    name: "Ivan",
    age: 30,
  },
  {
    name: "Sergey",
    age: 15,
  },
  {
    name: "Jenya",
    age: 22,
  },
  {
    name: "Nastya",
    age: 24,
  },
];

let isListVisible = ref(true);
let isAgeVisible = ref(false);

function changeAgeVisibility() {
  isAgeVisible.value = !isAgeVisible.value;
}

function changeListVisibility() {
  isListVisible.value = !isListVisible.value;
}
</script>

<template>
  <button @click="changeListVisibility">Show/Hide LIST</button>
  <button @click="changeAgeVisibility">Show/Hide AGE</button>
  <UserItem
    v-if="isListVisible"
    v-for="user in users"
    :name="user.name"
    :age="user.age"
    :showAge="isAgeVisible"
  />
</template>

<style scoped></style>
