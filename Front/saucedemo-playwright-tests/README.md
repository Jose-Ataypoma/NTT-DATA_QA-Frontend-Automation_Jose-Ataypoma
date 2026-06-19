# Proyecto de Automatización QA – Sauce Demo -Jose Ataypoma

## Descripción
Este proyecto automatiza el flujo de compra en la aplicación **Sauce Demo**, validando desde el inicio de sesión hasta la confirmación final.  
El objetivo es **asegurar la calidad del sistema** reduciendo errores, aumentando la confianza y facilitando la validación continua.  
Está pensado para que tanto el equipo técnico como el de negocio puedan entender qué se está probando y por qué es importante.

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
Ir al directorio del proyecto:

bash
cd Front/saucedemo-playwright-tests
Instalar dependencias:

bash
npm install
▶
Ejecución de pruebas
Ejecutar todas las pruebas:

bash
npm test
Ejecutar por etiquetas (para separar flujos):

bash
npm run test:login
npm run test:carrito
npm run test:compra
Generar y abrir reportes:

bash
npm run allure:generate
npm run allure:open

## Estructura del proyecto

```text
saucedemo-playwright-tests/
├── features/        # Escenarios en Gherkin
├── steps/           # Definiciones de pasos
├── pages/           # Page Objects
├── support/         # Hooks y utilidades
├── reports/         # Reportes generados
├── cucumber.js      # Configuración Cucumber
├── package.json     # Dependencias y scripts
├── tsconfig.json    # Configuración TypeScript
├── README.md        # Documentación
└── .gitignore       # Archivos ignorados por Git
```




