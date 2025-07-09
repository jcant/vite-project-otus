<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { getProductData } from "@/components/data/api.js";
import { getProductLocal } from "@/components/data/products_local.js";
import { useCartStore } from "@/states/CartState";
import { APP_CONFIG } from "@/constants";

const product = ref(null);
const isProductLoaded = ref(false);
const route = useRoute();
const cartStore = useCartStore();

onBeforeMount(async () => {
  if (APP_CONFIG.local_data_mode) {
    product.value = getProductLocal(route.params.id);
  } else {
    product.value = await getProductData(route.params.id);
  }
  isProductLoaded.value = true;
});

function addToCart() {
  cartStore.addToCart(product.value);
}
</script>

<template>
  <div>
    <div
      class="p-2 m-1 font-bold bg-amber-300 text-center"
      data-testid="page-title"
    >
      Category:
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
      v-show="isProductLoaded"
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
