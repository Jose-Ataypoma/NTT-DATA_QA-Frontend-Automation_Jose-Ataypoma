Feature: Login en Sauce Demo

  Scenario: Usuario puede iniciar sesión con credenciales válidas
    Given el usuario abre la página de login
    When ingresa usuario "standard_user" y contraseña "secret_sauce"
    Then debería ver la página de inventario