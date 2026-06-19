import { Page } from "playwright";

export class CarritoPage {
  constructor(private page: Page) {}

  async obtenerContadorCarrito(): Promise<number> {
    await this.page.waitForSelector(".shopping_cart_badge", { timeout: 10000 });
    const texto = await this.page.textContent(".shopping_cart_badge");
    return texto ? parseInt(texto) : 0;
  }

  async agregarProductos(cantidad: number) {
    const botones = await this.page.$$(".inventory_item button.btn_primary.btn_inventory");
    for (let i = 0; i < cantidad && i < botones.length; i++) {
      await botones[i].click();
    }
  }

  async irAlCarrito() {
    await this.page.click(".shopping_cart_link");
  }

  async contarProductosEnCarrito(): Promise<number> {
    const items = await this.page.$$(".cart_item");
    return items.length;
  }
}

