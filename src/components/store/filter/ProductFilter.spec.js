import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "./ProductFilter.vue";
import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useFilterStore } from "@/states/FilterState";

describe("Product filter component", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = mount(component);
  });

  it("imports", () => {
    expect(component).toBeDefined();
  });

  it("mounts without errors", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });
  it("renders all", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("set filter input control", () => {
    const filterStore = useFilterStore();
    const { filter, isFiltered } = storeToRefs(filterStore);
    const inputControl = wrapper.find('[data-testid="filter-input"]');

    expect(inputControl.exists()).toBe(true);
    inputControl.setValue("filter value");

    expect(isFiltered.value).toBe(true);
    expect(filter.value).toBe("filter value");
  });
  it("clear filter by click at clear button", () => {
    const filterStore = useFilterStore();
    const { filter, isFiltered } = storeToRefs(filterStore);
    filter.value = "some filter";
    wrapper = mount(component);
    const clearControl = wrapper.find('[data-testid="clear-filter"]');

    expect(clearControl.exists()).toBe(true);
    clearControl.trigger("click");

    expect(isFiltered.value).toBe(false);
    expect(filter.value).toBe("");
  });
});
