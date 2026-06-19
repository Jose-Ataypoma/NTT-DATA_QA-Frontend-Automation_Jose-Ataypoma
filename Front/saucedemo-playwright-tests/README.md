# sauce-demo-tests

## Descripción

Proyecto de pruebas automatizadas para la aplicación Sauce Demo usando Playwright y Cucumber.

## Requisitos previos

- Node.js instalado (recomendado: versión 18 o superior).
- Git instalado si se quiere clonar el repositorio.

## Instalación

1. Abrir una terminal en la carpeta del proyecto:

   ```bash
   cd c:\Users\User\Documents\Proyecto\sauce-demo-tests
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

## Ejecución de los tests

### Ejecutar la suite principal

```bash
npm test
```

Este comando ejecuta `cucumber-js` con la configuración definida en `cucumber.json`.

### Ejecutar con el perfil de Allure

```bash
npx cucumber-js -p allure
```

Esto ejecuta los tests usando el formatter `allure-cucumberjs/reporter` y genera los resultados en el directorio `allure-results`.

> Nota: la versión de Allure CLI que se usa aquí no admite el flag `--clean` en `generate`. El comando correcto es:
>
> ```bash
> npx allure generate allure-results --output allure-report
> ```

## Usar Allure CLI

Una vez ejecutada la suite con el perfil de Allure, genera y abre el reporte así:

```bash
npm run allure:generate
npm run allure:open
```

Si prefieres usar los comandos directos de Allure:

```bash
npx allure generate allure-results --output allure-report
npx allure open allure-report
```

## Generar reporte HTML de Cucumber

```bash
npm run test:report
```

Este comando ejecuta los tests, genera el archivo JSON en `reports/cucumber.json` y luego construye el reporte HTML en `reports/cucumber-report.html`.

## Estructura del proyecto

- `features/` - archivos `.feature` con los escenarios de Cucumber.
- `steps/` - definiciones de pasos de Cucumber en TypeScript.
- `support/` - hooks y configuración de pruebas.
- `pages/` - Page Objects para los flujos de prueba.
- `reports/` - resultados y reportes generados.



