import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

type Producto = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  producto: Producto;
};

export default function ProductoPage({ producto }: Props) {
  const router = useRouter();

  // Mientras se genera la página con fallback: true o 'blocking'
  if (router.isFallback) return <p className="text-center p-4">Cargando producto...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{producto.title}</h1>
      <img src={producto.image} alt={producto.title} className="w-full h-64 object-contain mb-4" />
      <p className="text-gray-700 mb-2">{producto.description}</p>
      <p className="text-lg font-semibold text-green-600">Precio: ${producto.price}</p>
    </div>
  );
}
