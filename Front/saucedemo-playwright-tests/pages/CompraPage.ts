import { Page } from "playwright";

export class CompraPage {
  constructor(private page: Page) {}

  async irAlCarrito() {
    await this.page.click(".shopping_cart_link");
  }

  async iniciarCompra() {
    await this.page.click("#checkout");
  }

  async ingresarDatos(nombre: string, apellido: string, codigoPostal: string) {
    await this.page.fill("#first-name", nombre);
    await this.page.fill("#last-name", apellido);
    await this.page.fill("#postal-code", codigoPostal);
    await this.page.click("#continue");
  }

  async confirmarCompra() {
    const finish = await this.page.$("#finish");
    if (finish) {
      await finish.click();
    }
  }

  async obtenerMensajeConfirmacion(): Promise<string> {
    await this.page.waitForSelector(".complete-header");
    const texto = await this.page.textContent(".complete-header");
    return texto ?? "";
  }

  async obtenerMensajeError(): Promise<string> {
    await this.page.waitForSelector(".error-message-container");
    const texto = await this.page.textContent(".error-message-container");
    return texto ?? "";
  }
}

