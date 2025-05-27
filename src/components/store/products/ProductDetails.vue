<script setup>
import { ref, watch } from "vue";
import ProductOrder from "../order/ProductOrder.vue";

const props = defineProps(['id']);
const product = ref(null);

onBeforeMount(() => prepareProductsData());

function prepareProductsData() {
  axios.get("https://fakestoreapi.com/products/{{$product.id}}").then((response) => {
    product.value = response.data;
  });
}
// const isOrdering = ref(false);
// const isOrderSuccessed = ref(false);

// function onOrder() {
//   isOrdering.value = true;
//   isOrderSuccessed.value = false;
// }

// function onCancelOrder() {
//   isOrdering.value = false;
// }

// function onSuccessOrder() {
//   isOrdering.value = false;
//   isOrderSuccessed.value = true;
//   setTimeout(() => {
//     isOrderSuccessed.value = false;
//   }, 3000);
// }
// watch(
//   () => props.product,
//   (newVal, oldVal) => {
//     isOrdering.value = false;
//   }
// );
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
    <router-link :to="'/checkout/' + product.id">
      <button
        class="text-3xl bg-amber-500 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
      >
        CHECK OUT
      </button>
    </router-link>
  </div>
</template>

<style scoped></style>
