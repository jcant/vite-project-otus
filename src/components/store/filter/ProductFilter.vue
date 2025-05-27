<script setup>
import { ref } from "vue";
import SearchInput from "./SearchInput.vue";
import { saveToStorage } from "../../data/storage.js";

const filterValue = ref("");
const isFiltered = ref(false);

function updateModel(filterString) {
  saveToStorage("currentProductFilter", filterString);
  if (filterString == "") {
    isFiltered.value = false;
  }
}

function clearFilter() {
  saveToStorage("currentProductFilter", "");
  isFiltered.value = false;
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
