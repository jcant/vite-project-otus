import { describe, it, expect, beforeAll, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useCartStore } from "@/states/CartState";
import ProductDetails from "./ProductDetails.vue";

import { createRouter, createWebHistory } from "vue-router";
import { appRoutes } from "@/router";
import { getProductLocal } from "@/components/data/products_local";
import { getProductData } from "@/components/data/api.js";

describe("Add to cart", async () => {
  let wrapper;

  beforeAll(async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: appRoutes,
    });

    router.push("/product/1");
    await router.isReady();

    vi.mock("@/components/data/api.js", () => {
      return {
        getProductData: vi.fn(),
      };
    });

    getProductData.mockResolvedValue(getProductLocal(1));

    setActivePinia(createPinia());

    wrapper = shallowMount(ProductDetails, {
      global: {
        plugins: [router],
      },
    });
  });

  it("click on add button", async () => {
    const button = wrapper.find('[data-testid="add-to-cart-button"]');
    expect(button.exists()).toBe(true);
    expect(getProductData).toHaveBeenCalledTimes(1);

    button.trigger("click");
    button.trigger("click");
    const cartStore = useCartStore();
    const { count } = storeToRefs(cartStore);

    expect(count.value).toBe(2);
  });

  afterEach(() => {
    getProductData.mockReset();
    wrapper.unmount();
  });
});
