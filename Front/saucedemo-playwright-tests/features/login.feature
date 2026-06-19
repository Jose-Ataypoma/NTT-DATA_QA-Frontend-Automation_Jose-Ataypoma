@login
Feature: Login en Sauce Demo

  Background:
    Given el usuario abre la página de login

  Scenario: Usuario puede iniciar sesión con credenciales válidas
    When ingresa usuario "standard_user" y contraseña "secret_sauc"
    Then debería ver la página de inventario

  Scenario: Usuario bloqueado no puede iniciar sesión
    When ingresa usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error indicando que el usuario está bloqueado

  Scenario: Usuario no puede iniciar sesión con campos vacíos
    When ingresa usuario "" y contraseña ""
    Then debería ver un mensaje de error