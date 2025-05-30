<script setup>
import { appRoutes } from "@/router";
import { useRouter } from "vue-router";
import { ROUTE_NAMES } from "@/router/router_names.js";

const router = useRouter();
</script>

<template>
  <div class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.HOME }">Catalog</router-link>
  </div>
  <div class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.ABOUT }">About</router-link>
  </div>
  <div class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.PRODUCT_ADD }"
      >New product
    </router-link>
  </div>
</template>

<style scoped>
.nav-element {
  display: inline;
  padding: 2px;
  margin: 4px;
  background: rgb(207, 255, 184);
  border: 1px solid green;
}
.router-link-active {
  background: rgb(244, 166, 30);
}
</style>
