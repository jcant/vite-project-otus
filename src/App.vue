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
  <div class="columns-2 gap-6">
    <button class="m-3 border-b" @click="changeListVisibility">
      Show/Hide LIST
    </button>
    <button class="m-3 border-b" @click="changeAgeVisibility">
      Show/Hide AGE
    </button>
  </div>
  <UserItem
    v-if="isListVisible"
    v-for="user in users"
    :name="user.name"
    :age="user.age"
    :showAge="isAgeVisible"
  />
</template>

<style scoped></style>
