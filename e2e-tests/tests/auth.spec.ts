import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("Should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();
  // get the Sign In heading
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  // fill email
  await page.locator("[name=email]").fill("charuka@gmail.com");
  // fill password
  await page.locator("[name=password]").fill("123jklmB@");
  // click Login button
  await page.getByRole("button", { name: "Login" }).click();

  // Expected results
  // expect Sign in Successfull! toast message
  await expect(page.getByText("Sign in Successfull!")).toBeVisible();
  // expect My Bookings link
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  // expect My Hotels link
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  // expect Sign Out button
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
