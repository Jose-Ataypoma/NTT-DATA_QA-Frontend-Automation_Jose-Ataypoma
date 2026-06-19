import { Page } from "playwright";

export class InventoryPage {
  constructor(private page: Page) {}

  async isVisible(): Promise<boolean> {
    return await this.page.isVisible(".inventory_list");
  }
}
