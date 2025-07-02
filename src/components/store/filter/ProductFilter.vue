<script setup>
import SearchInput from "./SearchInput.vue";
import { useFilterStore } from "@/states/FilterState.js";
import { storeToRefs } from "pinia";

const filterStore = useFilterStore();
const { filter, isFiltered } = storeToRefs(filterStore);

function updateModel(filterString) {
  filter.value = filterString;
}

function clearFilter() {
  filter.value = "";
}
</script>

<template>
  <div>
    <SearchInput
      :label="'Search by price or by title'"
      v-model:inputValue="filter"
      @update:inputValue="updateModel"
    />

    <div v-if="isFiltered" class="flex place-items-center cursor-pointer pt-1">
      Current filter:
      <span class="bg-amber-500 border rounded-2xl ml-2 pl-2 pr-2">{{
        filter
      }}</span
      ><img
        data-testid="clear-filter"
        src="@/assets/close.png"
        class="w-4 h-4 ml-1"
        @click="clearFilter"
      />
    </div>
  </div>
</template>

<style scoped></style>
