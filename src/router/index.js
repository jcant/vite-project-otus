import StoreMainPage from "../components/store/StoreMainPage.vue";
import { ROUTE_NAMES } from "../router/router_names.js";
import { createMemoryHistory, createRouter } from "vue-router";
import ProductDetails from "@/components/store/ProductDetails.vue";
import ProductOrder from "@/components/store/ProductOrder.vue";

export const appRoutes = [
  {
    path: "/",
    name: ROUTE_NAMES.HOME,
    component: StoreMainPage,
  },
  {
    path: "/product/{id}",
    name: ROUTE_NAMES.PRODUCT,
    component: ProductDetails,
  },
  {
    path: "/bascket",
    name: ROUTE_NAMES.ORDER_DETAILS,
    component: null,
  },
  {
    path: "/checkout",
    name: ROUTE_NAMES.CHECKOUT,
    component: ProductOrder,
  },
  {
    path: "/new-product",
    name: ROUTE_NAMES.PRODUCT_ADD,
    component: null,
  },
];

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: appRoutes,
});

export default router;
