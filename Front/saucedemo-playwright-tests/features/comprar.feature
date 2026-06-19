 @comprarProducto
Feature: Flujo de comprar producto

  Background:
    Given el usuario ha iniciado sesión en SauceDemo

  Scenario Outline: Finalizar compra con distintos datos de envío
    When procede a la compra
    And ingresa sus datos de envío "<nombre>" "<apellido>" "<codigoPostal>"
    And confirma la compra
    Then debería ver el mensaje de confirmación

    Examples:
      | nombre   | apellido   | codigoPostal |
      | José     | Ataypoma   | 15074        |
      | María    | López      | 08001        |
      | Carlos   | Ramírez    | 01010        |

  
  Scenario: Intentar finalizar compra sin código postal
    When procede a la compra
    And ingresa sus datos de envío "Jose" "Ataypoma" ""
    And confirma la compra
    Then debería ver el mensaje de error "Error: Postal Code is required"
