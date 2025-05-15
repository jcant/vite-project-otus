<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import SimpleButton from "./components/ShowHideButton.vue";
import UserItem from "./components/UserItem.vue";
</script>

<template>
  <SimpleButton caption="The button!" />
  <UserItem name="Ivan" age="30" />
  <UserItem name="Petr" />
</template>

<style scoped></style>
