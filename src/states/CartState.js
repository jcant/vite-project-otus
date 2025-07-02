import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]); //array of objects: {count: number, product: object}

  function addToCart(newProduct) {
    if (newProduct != null) {
      let isProductPresent = false;
      cart.value.forEach((cartItem) => {
        if (cartItem.product.id == newProduct.id) {
          cartItem.count++;
          isProductPresent = true;
        }
      });
      if (!isProductPresent) {
        cart.value.push({ count: 1, product: newProduct });
      }
    }
  }

  function incProduct(id) {
    cart.value.forEach((cartItem) => {
      if (cartItem.product.id == id) {
        cartItem.count++;
      }
    });
  }

  function decProduct(id) {
    cart.value.forEach((cartItem) => {
      if (cartItem.product.id == id && cartItem.count > 1) {
        cartItem.count--;
      }
    });
  }

  function removeProduct(id) {
    for (let i = 0; i < cart.value.length; i++) {
      if (cart.value[i].product.id == id) {
        cart.value.splice(i, 1);
        break;
      }
    }
  }

  function $reset() {
    cart.value = [];
  }

  const count = computed(() => {
    let count = 0;
    cart.value.forEach((cartItem) => (count += cartItem.count));
    return count;
  });

  const totalPrice = computed(() => {
    let count = 0;
    cart.value.forEach(
      (cartItem) => (count += cartItem.count * cartItem.product.price)
    );
    return count;
  });

  return {
    $reset,
    cart,
    count,
    totalPrice,
    addToCart,
    incProduct,
    decProduct,
    removeProduct,
  };
});
