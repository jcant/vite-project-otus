import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", () => {
  const filter = ref("");

  const isFiltered = computed(() => filter.value != "");

  return { filter, isFiltered };
});
