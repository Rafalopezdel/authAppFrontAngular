# 🔐 Módulo de Autenticación - Frontend (Angular)

Este proyecto corresponde al frontend del sistema de autenticación desarrollado con Angular. Permite a los usuarios registrarse, iniciar sesión y acceder a áreas protegidas según su estado de autenticación.

## 🚀 Tecnologías

- Angular (vX) – Framework de frontend SPA
- TypeScript – Lenguaje principal
- RxJS – Manejo de programación reactiva
- Bootstrap o Tailwind (opcional) – Estilización del proyecto
- JWT – Mecanismo de autenticación


## ✨ Funcionalidades

- Registro de nuevos usuarios.
- Login con persistencia de sesión usando tokens JWT.
- Rutas protegidas con guards.
- Validaciones de formularios.
- Mensajes de feedback (éxito / error).

## ⚙️ Configuración

1. Clona el repositorio:
  ```bash
   git clone https://github.com/Rafalopezdel/authAppFrontAngular.git
   cd authAppFrontAngular
   ```
2. Instala las dependencias:
  ```bash
   npm install
   ```
3. Configura la URL de tu backend en environments.ts:
  ```ts
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:3000/api'
    };
  ```
  
4. Ejecuta la app:
  ```bash
   ng serve
  ```




