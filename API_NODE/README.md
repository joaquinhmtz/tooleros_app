# Proyecto base con NodeJs
Es un proyecto base JavaScript creado con un entorno de ejecución con framework en NodeJs
de código abierto para desarrolladores que necesitan construir una aplicación 
escalable y de alto rendimiento del lado del servidor.

## Clonación
```git clone https://github.com/joaquinhmtz/API_NODEJS.git```

## Estructura del proyecto
```
API_NODEJS
├─── middlewares
│    └─── auth (Verificación de token válido)
│    └─── errorHandler (Manejo de errores como campos requeridos, directorio no encontrado, referencia desconocida, etc...)
├─── models
│    └─── account (Modelo de cuenta del usuario)
│    └─── user (Modelo de usuario)
│    └─── profile (Modelo de perfil para el usuario)
├─── modules
│    └─── auth (Gestión de cuentas de los usuarios)
│    └─── users (Gestión de usuarios)
│    └─── profiles (Obtención del perfil)
├─── public
│    └─── static (Archivos estáticos, etc..)
├─── utils
│    └─── pdf
│         └─── templates
│         └─── puppeteer.pdf.js (Script para generar pdf)
│    └─── global.utils.js (Utilería global)
└─── app.js
```

## ¿Que funcionalidades contiene el proyecto?
* **Login**
    * Validación de usuario y contraseña para generar token válido

* **Módulo de usuarios**
    * Creación de usuarios
    * Edición de usuarios
    * Eliminación lógico de usuarios
    * Listado de usuarios (paginación y filtros de búsqueda)

* **Útilería extra**
    * Generación de PDF con puppeteer

## Versión
`nvm use v19.7.0`

## Instalación
`npm install`

## Librerías iniciales
```json
{
    "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.21.1",
        "express-session": "^1.18.1",
        "jsonwebtoken": "^9.0.2",
        "moment": "^2.30.1",
        "mongoose": "^8.8.0",
        "multer": "^1.4.5-lts.1",
        "passport": "^0.7.0",
        "passport-local": "^1.0.0",
        "passport-local-mongoose": "^8.0.0",
        "puppeteer": "^23.7.1"
    }
}
```

## Uso de librerías
```json
{
    "cors": "Middleware para ExpressJs que permite habilitar el CORS con varias opciones",
    "dotenv": "Permite cargar variables de entorno desde un archivo .env",
    "express": "Framework para construir API Rest en una aplicación NodeJs",
    "express-sessiosn": "Gestión de sesiones para preservar los datos de múltiples solicitudes del mismo cliente",
    "jsonwebtoken": "Generación de token para el cliente",
    "moment": "Permite la manipulación para variables de tipo fecha",
    "mongoose": "Permite crear nuestros modelos de base de datos y conexión hacia la misma",
    "multer": "Middleware para guardar archivos enviados desde el cliente",
    "passport": "Middleware de autenticación",
    "passport-local": "Módulo que permite autenticarse por medio de usuario y contraseña",
    "passport-local-mongoose": "Módulo que permite autenticarse con nombre de usuario y contraseña haciendo el guardado del hash y salt en un esquema de MongoDB",
    "puppeteer": "Generación de PDF desde el servidor"
}
```

## Correr aplicación
```node app```
