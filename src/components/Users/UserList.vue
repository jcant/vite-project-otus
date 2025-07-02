<script setup>
import { getUsersArray } from "../data/users";
import UserItem from "./UserItem.vue";
import { ref } from "vue";

let users = getUsersArray();

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
  <div>
    <div>
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
  </div>
</template>

<style></style>
