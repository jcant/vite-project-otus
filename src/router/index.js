import { ROUTE_NAMES } from "@/router/router_names";
import { createWebHistory, createRouter } from "vue-router";
import StoreMainView from "@/views/StoreMainView.vue";

export const appRoutes = [
  {
    path: "/",
    name: ROUTE_NAMES.HOME,
    component: StoreMainView,
  },
  {
    path: "/product/:id",
    name: ROUTE_NAMES.PRODUCT_ID,
    component: () => import("@/components/store/products/ProductDetails.vue"),
  },
  {
    path: "/cart",
    name: ROUTE_NAMES.CART,
    component: () => import("@/views/CartView.vue"),
    children: [
      {
        path: "checkout",
        name: ROUTE_NAMES.CHECKOUT,
        component: () => import("@/components/store/order/OrderProduct.vue"),
        children: [
          {
            path: "success",
            name: ROUTE_NAMES.CHECKOUT_SUCCESS,
            component: () =>
              import("@/components/store/order/OrderSucceeded.vue"),
          },
          {
            path: "cancel",
            name: ROUTE_NAMES.CHECKOUT_CANCEL,
            component: () =>
              import("@/components/store/order/OrderCanceled.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: ROUTE_NAMES.ABOUT,
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/sign-in",
    name: ROUTE_NAMES.SIGN_IN,
    component: () => import("@/components/admin/AuthPage.vue"),
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

router.beforeEach(async (to, from) => {
  const isAuthenticated = localStorage.getItem("auth_user");
  if (!isAuthenticated && to.name == ROUTE_NAMES.PRODUCT_ADD) {
    return { name: ROUTE_NAMES.SIGN_IN };
  }
});

export default router;
