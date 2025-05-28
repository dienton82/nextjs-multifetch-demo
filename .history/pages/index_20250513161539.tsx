import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Pruebas Técnicas con Next.js + Tailwind</h1>
      <div className="space-y-4">
        <Link href="/usuarios" className="text-blue-600 hover:underline text-xl">
          ✅ Usuarios (Hooks + API)
        </Link>
        <Link href="/clientes" className="text-yellow-600 hover:underline text-xl">
          ✅ Clientes (API con loading/error)
        </Link>
        <Link href="/productos" className="text-green-600 hover:underline text-xl">
          ✅ Productos (SSR - Server Side Rendering)
        </Link>
        <Link href="/tiempo-real" className="text-pink-600 hover:underline text-xl">
          ✅ Tareas en tiempo real (SSR)
        </Link>
        <Link href="/blog" className="text-purple-600 hover:underline text-xl">
          ✅ Blog (SSG - Static Site Generation)
        </Link>
        <Link href="/prueba-refactor" className="text-indigo-600 hover:underline text-xl">
          ✅ Producto refactorizado (accesible + reutilizable)
        </Link>
        <Link href="/catalogo" className="text-red-600 hover:underline text-xl">
          ✅ Catálogo de productos (componente TarjetaProducto)
        </Link>
      </div>
    </div>
  );
}
