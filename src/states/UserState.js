import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref("");

  function login(username, password) {
    if (username != null && password != null) {
      user.value = username;
      saveToLocalStorage();
    }
  }

  function saveToLocalStorage() {
    if (isAuthorized) {
      localStorage.setItem("auth_user", user.value);
    }
  }

  function initFromLocalStorage() {
    user.value = localStorage.getItem("auth_user");
  }

  function logout() {
    user.value = "";
    localStorage.removeItem("auth_user");
  }

  function $reset() {
    logout();
  }

  const isAuthorized = computed(() => user.value != "" && user.value != null);

  return {
    user,
    isAuthorized,
    login,
    logout,
    initFromLocalStorage,
    $reset,
  };
});
