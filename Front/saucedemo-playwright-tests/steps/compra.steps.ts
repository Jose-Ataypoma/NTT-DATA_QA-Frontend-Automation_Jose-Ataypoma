import { Given, When, Then } from "@cucumber/cucumber";
import { strict as assert } from "assert";
import { CompraPage } from "../pages/CompraPage";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

let compraPage: CompraPage;

Given("el usuario ha iniciado sesión en SauceDemo", async function () {
  const loginPage = new LoginPage(this.page);
  const inventoryPage = new InventoryPage(this.page);
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");
  const visible = await inventoryPage.isVisible();
  if (!visible) throw new Error("No se pudo iniciar sesión");
});

When("procede a la compra", async function () {
  compraPage = new CompraPage(this.page);
  await compraPage.irAlCarrito();
  await compraPage.iniciarCompra();
});

When(
  "ingresa sus datos de envío {string} {string} {string}",
  async function (nombre: string, apellido: string, codigoPostal: string) {
    await compraPage.ingresarDatos(nombre, apellido, codigoPostal);
  }
);

When("confirma la compra", async function () {
  await compraPage.confirmarCompra();
});

Then("debería ver el mensaje de confirmación", async function () {
  const mensaje = await compraPage.obtenerMensajeConfirmacion();
  assert.equal(mensaje?.trim(), "Thank you for your order!");
});

//
Then("debería ver el mensaje de error {string}", async function (esperado: string) {
  const mensaje = await compraPage.obtenerMensajeError();
  assert.equal(mensaje?.trim(), esperado);
});
