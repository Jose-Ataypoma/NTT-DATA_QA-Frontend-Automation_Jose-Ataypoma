import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"] 
  });

  // viewport: null asegura que Playwright no limite el tamaño
  this.context = await this.browser.newContext({ viewport: null });
  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});
