import { When, Then } from "@cucumber/cucumber";
import { strict as assert } from "assert";
import { CarritoPage } from "../pages/CarritoPage";

let carritoPage: CarritoPage;

When("agrega {int} productos al carrito", async function (cantidad: number) {
  carritoPage = new CarritoPage(this.page);
  await carritoPage.agregarProductos(cantidad);
});

Then("debería ver el contador del carrito en {int}", async function (esperado: number) {
  carritoPage = new CarritoPage(this.page);
  const contador = await carritoPage.obtenerContadorCarrito();
  assert.equal(
    contador,
    esperado,
    `Se esperaba ${esperado} productos en el carrito, pero apareció ${contador}`
  );
});

When("navega al carrito", async function () {
  await carritoPage.irAlCarrito();
});

Then("debería ver {int} productos listados en el carrito", async function (esperado: number) {
  const cantidad = await carritoPage.contarProductosEnCarrito();
  if (cantidad !== esperado) {
    throw new Error(`Se esperaba ${esperado} productos, pero aparecieron ${cantidad}`);
  }
});
