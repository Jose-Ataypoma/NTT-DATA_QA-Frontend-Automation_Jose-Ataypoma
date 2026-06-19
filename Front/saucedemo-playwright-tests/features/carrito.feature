@carrito
Feature: Carrito de compras en Sauce Demo

  Background:
    Given el usuario abre la página de login
    When ingresa usuario "standard_user" y contraseña "secret_sauce"

 
  Scenario Outline: Usuario agrega distintos productos al carrito
    And agrega <cantidad> productos al carrito
    Then debería ver el contador del carrito en <cantidad>
    And navega al carrito
    Then debería ver <cantidad> productos listados en el carrito

    Examples:
      | cantidad |
      | 1        |
      | 4        |
      | 6        |
