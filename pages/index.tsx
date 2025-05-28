import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
  <h1 className="text-2xl font-bold mb-6 text-center">
    Pruebas Técnicas con <span className="text-black">Next.js</span> + <span className="text-blue-500">Tailwind</span>
  </h1>

  <div className="flex flex-wrap justify-center gap-3 max-w-5xl text-sm text-center">
    <Link href="/usuarios" className="text-blue-600 hover:underline">✅ Usuarios (Hooks + API)</Link>
    <Link href="/clientes" className="text-yellow-600 hover:underline">✅ Clientes (API con loading/error)</Link>
    <Link href="/productos" className="text-green-600 hover:underline">✅ Productos (SSR)</Link>
    <Link href="/tiempo-real" className="text-pink-600 hover:underline">✅ Tareas en tiempo real (SSR)</Link>
    <Link href="/blog" className="text-purple-600 hover:underline">✅ Blog (SSG)</Link>
    <Link href="/prueba-refactor" className="text-blue-600 hover:underline">✅ Producto refactorizado</Link>
    <Link href="/catalogo" className="text-red-600 hover:underline">✅ Catálogo (TarjetaProducto)</Link>
    <Link href="/producto/1" className="text-orange-600 hover:underline">🛒 Producto #1 (pre-generado)</Link>
    <Link href="/producto/2" className="text-orange-600 hover:underline">🛒 Producto #2 (pre-generado)</Link>
    <Link href="/producto/10" className="text-orange-600 hover:underline">🛒 Producto #10 (generado con fallback)</Link>
  </div>
  </div>
  );
}
