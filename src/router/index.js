import { ROUTE_NAMES } from "@/router/router_names";
import { createWebHistory, createRouter } from "vue-router";
import StoreMainPage from "@/components/store/StoreMainPage.vue";

export const appRoutes = [
  {
    path: "/",
    name: ROUTE_NAMES.HOME,
    component: StoreMainPage,
  },
  {
    path: "/about",
    name: ROUTE_NAMES.ABOUT,
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/product/:id",
    name: ROUTE_NAMES.PRODUCT_ID,
    component: () => import("@/components/store/products/ProductDetails.vue"),
  },
  {
    path: "/bascket",
    name: ROUTE_NAMES.ORDER_DETAILS,
    component: null,
  },
  {
    path: "/checkout/:id",
    name: ROUTE_NAMES.CHECKOUT,
    component: () => import("@/components/store/order/OrderProduct.vue"),
  },
  {
    path: "/new-product",
    name: ROUTE_NAMES.PRODUCT_ADD,
    component: () => import("@/views/NewProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes,
});

export default router;
