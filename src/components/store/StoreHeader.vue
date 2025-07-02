<script setup>
import NavigationMenu from "./NavigationMenu.vue";
import ProductFilter from "@/components/store/filter/ProductFilter.vue";
import { ROUTE_NAMES } from "@/router/router_names";
import { useCartStore } from "@/states/CartState";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { count } = storeToRefs(cartStore);
</script>

<template>
  <div
    class="grid grid-cols-[10%_50%_30%_10%] bg-amber-400 p-4 place-items-center"
  >
    <div>STORE NAME</div>
    <div><NavigationMenu /></div>
    <ProductFilter />
    <div class="flex flex-row">
      <router-link :to="{ name: ROUTE_NAMES.CART }">
        <img class="h-6 w-6 mr-3" src="@/assets/cart.png" />
      </router-link>
      <span v-if="count != 0">{{ count }}</span>
    </div>
  </div>
</template>

<style scoped></style>
