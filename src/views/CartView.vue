<script setup>
import ProductInCart from "@/components/store/products/ProductInCart.vue";
import { ROUTE_NAMES } from "@/router/router_names";
import { useCartStore } from "@/states/CartState";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart, totalPrice, count } = storeToRefs(cartStore);

function clearCart() {
  cartStore.$reset();
}
</script>

<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center mb-4">Cart view</div>
  <div v-if="count == 0" class="p-2 mt-10 font-bold text-center">
    Please select products
  </div>
  <div v-for="item in cart">
    <ProductInCart :product="item.product" :count="item.count" />
  </div>
  <div v-if="count > 0" class="text-4xl ml-12 mt-10">
    Total: {{ totalPrice }}
  </div>
  <div v-if="count > 0" class="ml-12 mt-10">
    <button class="cart-button button-simple" @click="clearCart">
      CLEAR CART
    </button>
  </div>
  <div v-if="count > 0" class="ml-12 mt-10">
    <router-link :to="{ name: ROUTE_NAMES.CHECKOUT }">
      <button class="cart-button button-accent">CHECKOUT</button>
    </router-link>
  </div>
  <router-view />
</template>

<style scoped>
.cart-button {
  font-size: 24px;

  padding: 0px 6px;
  margin: 2px;
  border: 1px solid rgb(237, 116, 18);
  border-radius: 6px;
  cursor: pointer;
}

.button-accent {
  background: #ffa748;
}
.button-simple {
  background: #fff5e9;
}
</style>
