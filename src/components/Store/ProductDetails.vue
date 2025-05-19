<script setup>
const props = defineProps({ product: Object });
</script>

<template>
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
</template>

<style scoped></style>
