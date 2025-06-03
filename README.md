# 🚀 Next.js Multifetch Demo

![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🧠 Descripción

Este proyecto es una demostración práctica desarrollada con Next.js, Tailwind CSS y TypeScript. Explora diferentes técnicas de consumo de datos con SSR, SSG, ISR, Hooks personalizados, rutas avanzadas y simulaciones de componentes reales como catálogos, productos, blog y más.

---

## 🌐 Acceso en línea

🔗 [Ver sitio desplegado en Vercel](https://nextjs-multifetch-demo.vercel.app/)

---

## 🛠️ Tecnologías principales

- ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) Librería base para interfaces interactivas
- ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white) Framework React para SSR/SSG/ISR
- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) Estilos utilitarios rápidos
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) Tipado estático
- ![CSS Modules](https://img.shields.io/badge/CSS%20Modules-blue) Estilos encapsulados
- ![API Routes](https://img.shields.io/badge/API%20Routes-integrado-blueviolet) Rutas de API integradas en Next.js
- ![Image Optimization](https://img.shields.io/badge/Images-NextImage-yellow) Optimización de imágenes con Next/Image


---

## 📦 Estructura del proyecto

```bash
pruebas-tecnicas-nextjs/
├── components/          # Tarjetas de producto reutilizables
├── pages/
│   ├── producto/        # Ruta dinámica con SSG + ISR
│   ├── clientes.tsx     # Hooks + carga condicional
│   ├── productos.tsx    # SSR
│   ├── tiempo-real.tsx  # SSR
│   ├── blog.tsx         # SSG
│   ├── usuarios.tsx     # Fetch con Hooks personalizados
│   ├── catalogo.tsx     # Tarjetas dinámicas
│   ├── prueba-refactor.tsx # Refactor con Imagen
├── styles/              # Estilos globales con Tailwind y CSS modules
├── public/              # Recursos estáticos
├── next.config.js       # Configuración de imágenes externas
├── tailwind.config.js   # Configuración de utilidades
├── tsconfig.json        # Configuración de TypeScript
└── README.md
```

---

## 🔃 Endpoints y APIs utilizadas

- `https://jsonplaceholder.typicode.com/users` — Lista de usuarios
- `https://jsonplaceholder.typicode.com/todos` — Tareas en tiempo real
- `https://fakestoreapi.com/products` — Catálogo de productos y detalle dinámico

---

## ✅ Funcionalidades implementadas

| Característica                              | Estado |
|---------------------------------------------|--------|
| SSR para productos y tareas                 | ✅     |
| SSG + ISR para productos dinámicos          | ✅     |
| Rutas dinámicas con `getStaticPaths`        | ✅     |
| Hooks personalizados para manejo de vista   | ✅     |
| Estilos con Tailwind CSS + CSS Modules      | ✅     |
| Imagen con optimización en Next/Image       | ✅     |
| Navegación con botón “← Atrás”              | ✅     |
| Proyecto deployado con Vercel               | ✅     |

---

## 🧪 Cómo probar localmente

```bash
# Clonar el repositorio
git clone https://github.com/dienton82/nextjs-multifetch-demo.git
cd nextjs-multifetch-demo

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
# Abre: http://localhost:3000
```

---

## 🖼️ Captura

![Home](pages/next.webp)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.  
© 2025 [dienton82](https://github.com/dienton82)
