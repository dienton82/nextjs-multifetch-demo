// ✅ IMPORTACIONES
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

// ✅ TIPADO
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

// ✅ COMPONENTE PRINCIPAL
export default function ProductoPage({ producto }: Props) {
  const router = useRouter();

  if (router.isFallback) return <p className="text-center">Cargando...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">{producto.title}</h1>
      <img src={producto.image} alt={producto.title} className="w-full h-64 object-contain" />
      <p className="text-gray-700">{producto.description}</p>
      <p className="text-lg font-semibold text-green-600">Precio: ${producto.price}</p>
    </div>
  );
}

// ✅ GENERACIÓN DE RUTAS
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const productos: Producto[] = await res.json();

  const paths = productos.map((producto) => ({
    params: { id: producto.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

// ✅ FETCH DE DATOS POR ID
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params?.id}`);
  const producto: Producto = await res.json();

  return {
    props: {
      producto,
    },
    revalidate: 60, // ISR
  };
};
