// @ts-check
import { test, expect } from "@playwright/test";
// import { flushPromises } from "@vue/test-utils";

test("Products operations", async ({ page }) => {
  //Open main page
  await page.goto("/");
  await expect(page).toHaveTitle(/Jcant/);
  await expect(page.getByTestId("page-title")).toHaveText("Catalog");

  //Open product id=1
  await page.getByTestId("link-to-product-1").click();
  await expect(page.getByTestId("page-title")).toHaveText(/Category/);
  await page.getByTestId("add-to-cart-button").click();
  await expect(page.getByTestId("cart-count")).toHaveText("1");

  // flushPromises();

  // //return to catalog
  await page.getByRole("link", { name: "Catalog" }).click();
  await expect(page.getByTestId("page-title")).toHaveText("Catalog");

  // //Open product id=2
  await page.getByTestId("link-to-product-2").click();
  await expect(page.getByTestId("page-title")).toHaveText(/Category/);
  await page.getByTestId("add-to-cart-button").click();
  await expect(page.getByTestId("cart-count")).toHaveText("2");

  // //Open Cart
  await page.getByRole("link", { name: "Cart" }).click();
  await expect(page.getByTestId("page-title")).toHaveText("Cart view");
  await expect(page.getByTestId("total-price")).toBeVisible();

  // //Increase product id=1 amount
  await page.getByTestId("incValue1").click();
  await expect(page.getByTestId("product-count-1")).toHaveText("2");
  await expect(page.getByTestId("cart-count")).toHaveText("3");

  // //Increase product id=2 amount
  await page.getByTestId("incValue2").click();
  await page.getByTestId("incValue2").click();
  await expect(page.getByTestId("product-count-2")).toHaveText("3");
  await expect(page.getByTestId("cart-count")).toHaveText("5");

  // //Decrease product id=2 amount
  await page.getByTestId("decValue2").click();
  await expect(page.getByTestId("product-count-2")).toHaveText("2");
  await expect(page.getByTestId("cart-count")).toHaveText("4");

  // //Clear cart
  await page.getByTestId("clear-cart-button").click();
  await expect(page.getByTestId("empty-cart-message")).toBeVisible();
  await expect(page.getByTestId("cart-count")).not.toBeVisible();
});
