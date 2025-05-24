<script setup>
import { ref } from "vue";
import ProductOrder from "./ProductOrder.vue";

const props = defineProps({ product: Object });
const isOrdering = ref(false);
const isOrderSuccessed = ref(false);

function onOrder() {
  isOrdering.value = true;
  isOrderSuccessed.value = false;
}

function onCancelOrder() {
  isOrdering.value = false;
}

function onSuccessOrder() {
  isOrdering.value = false;
  isOrderSuccessed.value = true;
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
      <span>Categoty: </span><span>{{ product?.category }}</span>
    </div>
    <div>
      <span>Rate: {{ product?.rating.rate }}</span
      ><span> Count: {{ product?.rating.count }}</span>
    </div>
    <button
      v-if="!isOrdering"
      class="text-3xl bg-amber-500 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
      @click="onOrder"
    >
      ORDER
    </button>
  </div>
  <ProductOrder
    v-if="isOrdering"
    @cancel-order="onCancelOrder"
    @success-order="onSuccessOrder"
  />
  <div v-if="isOrderSuccessed" class="text-4xl m-6 text-center">
    ORDER SUCCESS!
  </div>
</template>

<style scoped></style>
