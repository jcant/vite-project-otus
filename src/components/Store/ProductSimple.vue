<script setup>
const props = defineProps({ product: Object, isSelected: Boolean });
const emit = defineEmits(["select-product"]);

function selectProduct() {
  emit("select-product", props.product.id);
}
</script>

<template>
  <div
    class="product-simple"
    :class="{ 'product-simple-selected': isSelected }"
    @click="selectProduct()"
  >
    {{ product.title }}
  </div>
</template>

<style scoped>
.product-simple {
  padding: 1px;
  margin: 4px;
  border: 1px solid rgb(191, 150, 0);
  border-radius: 4px;
  background: rgb(240, 214, 141);
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-simple:hover {
  background: rgb(242, 198, 76);
}

.product-simple-selected {
  background: rgb(241, 181, 13);
  border: 1px solid rgb(99, 78, 2);
}
</style>
