<script setup>
const props = defineProps({ product: Object, isSelected: Boolean });
const emit = defineEmits(["select-product"]);

function selectProduct() {
  emit("select-product", props.product.id);
}
</script>

<template>
  <div class="shadow-xl m-6 text-center items-center">
    <div
      class="product-simple"
      :class="{ 'product-simple-selected': isSelected }"
      @click="selectProduct()"
    >
      <img
        class="h-26 w-26 object-contain m-auto"
        :src="product?.image"
        alt="product photo"
      />
      Price: {{ product.price }}
    </div>
  </div>
</template>

<style scoped>
.product-simple {
  padding: 6px;
  margin: 0px auto;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-simple:hover {
  border: 1px solid rgb(255, 196, 68);
}

.product-simple-selected {
  border: 1px solid rgb(190, 190, 190);
}
</style>
