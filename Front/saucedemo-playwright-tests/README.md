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

 Estructura del proyecto
Código
saucedemo-playwright-tests/
├── features/          # Escenarios en Gherkin (español, fáciles de leer)
├── steps/             # Definiciones de pasos que conectan escenarios con código
├── pages/             # Page Objects: representan pantallas y acciones de usuario
├── support/           # Configuración, hooks y utilidades compartidas
├── reports/           # Reportes generados en JSON/HTML
├── cucumber.js        # Configuración de perfiles y etiquetas de Cucumber
├── package.json       # Dependencias y scripts de ejecución
├── tsconfig.json      # Configuración de TypeScript
├── README.md          # Documentación del proyecto
└── .gitignore         # Archivos y carpetas que no deben subirse a Git





