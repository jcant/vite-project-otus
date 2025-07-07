import { describe, it, expect, beforeAll } from "vitest";
import { useUserStore } from "@/states/UserState";
import { setActivePinia, createPinia, storeToRefs } from "pinia";

describe("UserState", async () => {
  let userName = "test-user";
  let password = "test-password";

  beforeAll(() => {
    setActivePinia(createPinia());
  });

  it("Auth testing", () => {
    const userStore = useUserStore();
    const { user, isAuthorized } = storeToRefs(userStore);
    userStore.login(userName, password);

    expect(user.value).toBe(userName);
    expect(isAuthorized.value).toBe(true);
  });

  it("Logout testing", () => {
    const userStore = useUserStore();
    const { user, isAuthorized } = storeToRefs(userStore);

    userStore.logout();

    expect(user.value).toBe("");
    expect(isAuthorized.value).toBe(false);
  });

  it("Not Auth with null login", () => {
    const userStore = useUserStore();
    const { user, isAuthorized } = storeToRefs(userStore);

    userStore.login(null, password);

    expect(user.value).toBe("");
    expect(isAuthorized.value).toBe(false);
  });

  it("Not Auth with null password", () => {
    const userStore = useUserStore();
    const { user, isAuthorized } = storeToRefs(userStore);

    userStore.login(userName, null);

    expect(user.value).toBe("");
    expect(isAuthorized.value).toBe(false);
  });
});
