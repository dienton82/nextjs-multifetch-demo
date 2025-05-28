import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenido al Demo de Next.js + Tailwind</h1>
      <div className="space-y-4">
        <Link href="/usuarios" className="text-blue-600 hover:underline text-xl">
          Ver usuarios (Hooks + API)
        </Link>
        <Link href="/productos" className="text-green-600 hover:underline text-xl">
          Ver productos (SSR)
        </Link>
        <Link href="/blog" className="text-purple-600 hover:underline text-xl">
          Ver blog (SSG)
        </Link>
      </div>
    </div>
  );
}
