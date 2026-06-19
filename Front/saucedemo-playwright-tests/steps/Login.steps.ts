import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given("el usuario abre la página de login", async function () {
  loginPage = new LoginPage(this.page);
  inventoryPage = new InventoryPage(this.page);
  await loginPage.navigate();
});

When("ingresa usuario {string} y contraseña {string}", async function (username: string, password: string) {
  await loginPage.login(username, password);
});

Then("debería ver la página de inventario", async function () {
  const visible = await inventoryPage.isVisible();
  if (!visible) throw new Error("El login falló");
});

// Step: login bloqueado
Then("debería ver un mensaje de error", async function(){
    const errorMessage = await loginPage.getErrorMessage();
    if(!errorMessage) throw new Error("No aparecio el mensaje de error esperado");
    console.log("Mensaje de error mostrado: ", errorMessage);
});

Then("debería ver un mensaje de error indicando que el usuario está bloqueado", async function(){
    const errorMessage = await loginPage.getErrorMessage();
    if(!errorMessage.includes("locked out")){
        throw new Error(`Se espera un mensaje de usuario bloqueado, pero aparecio: ${errorMessage}`);
    }
    console.log("Mensaje de error mostrado: ", errorMessage);
})