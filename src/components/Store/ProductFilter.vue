<script setup>
import { ref } from "vue";
import SearchInput from "./SearchInput.vue";

const emit = defineEmits(["filter-products", "clear-filter"]);
const props = defineProps(["products"]);

const filterValue = ref("");
const isFiltered = ref(false);
const filteredProducts = ref(props.products);

function updateModel(filterString) {
  filteredProducts.value = props.products.filter(
    (product) =>
      product.price == filterString ||
      product.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
  );
  isFiltered.value = true;
  emit("filter-products", filteredProducts.value);
}

function clearFilter() {
  filterValue.value = "";
  isFiltered.value = false;
  emit("clear-filter");
}
</script>

<template>
  <div>
    <SearchInput
      :label="'Search by price or by title'"
      v-model:inputValue="filterValue"
      @update:inputValue="updateModel"
    />

    <div v-if="isFiltered" class="flex place-items-center cursor-pointer pt-1">
      Current filter:
      <span class="bg-amber-500 border rounded-2xl ml-2 pl-2 pr-2">{{
        filterValue
      }}</span
      ><img
        src="../../assets/close.png"
        class="w-4 h-4 ml-1"
        @click="clearFilter"
      />
    </div>
  </div>
</template>

<style scoped></style>
