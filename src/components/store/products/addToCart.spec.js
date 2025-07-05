import { describe, it, expect, beforeAll, vi } from "vitest";
import { shallowMount, flushPromises } from "@vue/test-utils";
import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useCartStore } from "@/states/CartState";
import ProductDetails from "./ProductDetails.vue";

import { createRouter, createWebHistory } from "vue-router";
import { appRoutes } from "@/router";
import axios from "axios";
import { getProductById } from "@/components/data/products_local";

describe("Add to cart", async () => {
  let wrapper;

  beforeAll(async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: appRoutes,
    });

    router.push("/product/1");
    await router.isReady();

    vi.mock("axios", () => {
      return {
        default: {
          get: vi.fn(),
        },
      };
    });

    const responseGet = getProductById(1);

    axios.get.mockResolvedValue(responseGet);

    setActivePinia(createPinia());

    wrapper = shallowMount(ProductDetails, {
      global: {
        plugins: [router],
      },
    });
  });

  it("click on add button", async () => {
    await flushPromises();

    const button = wrapper.find('[data-testid="add-to-cart-button"]');
    expect(button.exists()).toBe(true);
    // expect(axios.get).toHaveBeenCalledTimes(1);

    button.trigger("click");
    button.trigger("click");
    const cartStore = useCartStore();
    const { count } = storeToRefs(cartStore);

    expect(count.value).toBe(2);
  });

  afterEach(() => {
    axios.get.mockReset();
    wrapper.unmount();
  });
});
