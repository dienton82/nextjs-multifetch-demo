# 📘 Pruebas Técnicas con Next.js

![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?logo=nextdotjs&style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-3178c6?logo=typescript&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?logo=tailwindcss&style=for-the-badge)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-Compatible-264de4?logo=css3&style=for-the-badge)
![MIT License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)

---

## 🚀 Descripción

Este repositorio contiene una serie de pruebas técnicas realizadas con **Next.js** que incluyen funcionalidades como SSR, SSG, rutas dinámicas, consumo de APIs externas y componentes reutilizables con estilos modernos.

---

## 🧩 Tecnologías Utilizadas

- ⚛️ **Next.js** para renderizado SSR y SSG.
- 💙 **React** como biblioteca base.
- 🟦 **TypeScript** para tipado estático.
- 🌬 **TailwindCSS** para estilos utilitarios.
- 🎨 **CSS Modules** para estilos encapsulados.
- ☁️ **Vercel** para despliegue.

---

## 📦 Funcionalidades

| Página                  | Tipo       | Descripción                                              |
|-------------------------|------------|----------------------------------------------------------|
| `/clientes`             | CSR        | Lista de usuarios obtenidos desde JSONPlaceholder        |
| `/productos`            | SSR        | Productos obtenidos de FakeStore API (Server-side)       |
| `/blog`                 | SSG        | Posts generados estáticamente desde JSONPlaceholder      |
| `/tiempo-real`          | SSR        | Listado de tareas simulando tiempo real                  |
| `/producto/[id]`        | SSG + ISR  | Detalles de producto con regeneración estática incremental |
| `/catalogo`             | CSR        | Tarjetas de productos con props estáticos                |
| `/prueba-refactor`      | CSR        | Componente refactorizado con navegación y props          |

---

## 📁 Estructura del Proyecto

```plaintext
pruebas-tecnicas-nextjs/
├── components/
│   ├── ProductoCard.tsx
│   └── TarjetaProducto.tsx
├── pages/
│   ├── producto/
│   │   └── [id].tsx
│   ├── blog.tsx
│   ├── catalogo.tsx
│   ├── clientes.tsx
│   ├── index.tsx
│   ├── productos.tsx
│   ├── prueba-refactor.tsx
│   ├── tiempo-real.tsx
│   └── usuarios.tsx
├── styles/
│   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🌐 APIs Utilizadas

- https://jsonplaceholder.typicode.com/users — Listar usuarios
- https://jsonplaceholder.typicode.com/posts?_limit=5 — Listar posts
- https://jsonplaceholder.typicode.com/todos?_limit=5 — Listar tareas
- https://fakestoreapi.com/products?limit=6 — Listar productos
- https://fakestoreapi.com/products/[id] — Obtener detalle de producto

---

## 🔧 Instalación y uso

```bash
# 1. Clona el repositorio
git clone https://github.com/dienton82/pruebas-tecnicas-nextjs.git
cd pruebas-tecnicas-nextjs

# 2. Instala las dependencias
npm install

# 3. Ejecuta en modo desarrollo
npm run dev

# Abre: http://localhost:3000
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.  
© 2025 [dienton82](https://github.com/dienton82)

---

> ✨ Gracias por revisar estas pruebas técnicas. Para sugerencias o mejoras, abre un *issue* en GitHub.
