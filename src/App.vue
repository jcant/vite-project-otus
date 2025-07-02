<script setup>
import { onBeforeMount } from "vue";
import StoreHeader from "@/components/store/StoreHeader.vue";
import { useUserStore } from "./states/UserState";

const userStore = useUserStore();

onBeforeMount(() => {
  userStore.initFromLocalStorage();
});
</script>

<template>
  <StoreHeader />
  <router-view />
</template>

<style scoped></style>
