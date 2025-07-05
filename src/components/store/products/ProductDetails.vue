<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { getProductById } from "@/components/data/products_local.js";
import { useCartStore } from "@/states/CartState";
import { APP_CONFIG } from "@/constants";

const product = ref(null);
const route = useRoute();
const cartStore = useCartStore();

onBeforeMount(() => {
  if (APP_CONFIG.local_data_mode) {
    getLocalProductsData();
  } else {
    getProductsData();
  }
});

function getProductsData() {
  axios
    .get(`${APP_CONFIG.remote_products_url}/products/${route.params.id}`)
    .then((response) => {
      product.value = response.data;
    });
}

function getLocalProductsData() {
  product.value = getProductById(route.params.id);
}

function addToCart() {
  cartStore.addToCart(product.value);
}
</script>

<template>
  <div>
    <div class="p-2 m-1 font-bold bg-amber-300 text-center">
      {{ product?.category }}
    </div>
    <div class="m-4">
      <h1 class="text-shadow-lg/20 text-2xl">{{ product?.title }}</h1>
    </div>
    <div>
      <div class="grid grid-cols-[30%_70%] place-items-center">
        <div class="m-8">
          <img
            class="h-48 w-96 object-contain"
            :src="product?.image"
            alt="product photo"
          />
        </div>
        <div class="m-8">
          <span>{{ product?.description }}</span>
        </div>
      </div>
      <span>Price: </span><span>{{ product?.price }}</span>
    </div>

    <div>
      <span>Category: </span><span>{{ product?.category }}</span>
    </div>
    <div>
      <span>Rate: {{ product?.rating.rate }}</span
      ><span> Count: {{ product?.rating.count }}</span>
    </div>

    <button
      data-testid="add-to-cart-button"
      @click="addToCart"
      class="text-2xl bg-amber-500 pl-3 pr-3 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
    >
      ADD TO CART
    </button>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
