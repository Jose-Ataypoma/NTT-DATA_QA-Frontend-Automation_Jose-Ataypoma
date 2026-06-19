# 🧪 Sauce Demo — Playwright + Cucumber Tests - Jose Ataypoma

## 📖 Descripción
Este proyecto automatiza el flujo de compra en la aplicación **Sauce Demo**, validando desde el inicio de sesión hasta la confirmación final.  
El objetivo es asegurar la calidad del sistema, reducir errores y aumentar la confianza en cada entrega.  
La documentación está organizada para que tanto el equipo técnico como el de negocio comprendan el alcance y valor de la automatización.

---

## 📦 Prerrequisitos
- **Node.js 18+** — verificar con `node --version`
- **npm 9+** — verificar con `npm --version`
- **Chromium** — instalar con:
  ```bash
  npx playwright install chromium
 
## Instalación
npm install

## Ejecución de Tests
Todos los tests
npm test

Por feature (según etiquetas)
bash
npm run test:login
npm run test:carrito
npm run test:compra

Con navegador visible (debugging)
bash
npm run test:headed

Reportes
Tras cada ejecución se genera un reporte HTML en:
Código
reports/cucumber-report.html

Estructura del Proyecto
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




