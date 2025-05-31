<script setup>
import { ROUTE_NAMES } from "@/router/router_names.js";
import { useUserStore } from "@/states/UserState";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { isAuthorized } = storeToRefs(userStore);
const router = useRouter();

function signout() {
  userStore.logout();
  router.push({ name: ROUTE_NAMES.HOME });
}
</script>

<template>
  <div class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.HOME }">Catalog</router-link>
  </div>
  <div class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.CART }">Cart </router-link>
  </div>
  <div class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.ABOUT }">About</router-link>
  </div>
  <div v-if="!isAuthorized" class="nav-element">
    <router-link :to="{ name: ROUTE_NAMES.SIGN_IN }">Sign In</router-link>
  </div>
  <div v-else class="nav-element" @click="signout">Sign Out</div>
  <div v-if="isAuthorized" class="nav-element accent">
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
  cursor: pointer;
}

.accent {
  color: rgb(176, 6, 6);
}

.router-link-active {
  font-weight: 800;
  text-shadow: 2px 2px 2px rgb(79, 79, 79);
}
</style>
