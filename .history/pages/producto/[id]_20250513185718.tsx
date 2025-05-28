import { GetStaticPaths, GetStaticProps } from 'next';
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

  // Si Next está generando la página por primera vez con fallback: true
  if (router.isFallback) {
    return <p className="text-center p-4 text-gray-600">Cargando página del producto...</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{producto.title}</h1>
      <img
        src={producto.image}
        alt={producto.title}
        className="w-full h-64 object-contain rounded mb-4"
      />
      <p className="text-gray-700 mb-2">{producto.description}</p>
      <p className="text-lg font-semibold text-green-600">Precio: ${producto.price}</p>
    </div>
  );
}

// ✅ Rutas a generar estáticamente: solo 1 y 2
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=2');
  const productos: Producto[] = await res.json();

  const paths = productos.map((producto) => ({
    params: { id: producto.id.toString() },
  }));

  return {
    paths,          // Solo /producto/1 y /producto/2 se generan en el build
    fallback: true, // Otras se generan en tiempo real si alguien las visita
  };
};

// ✅ Trae los datos de cada producto por ID
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const producto: Producto = await res.json();

  return {
    props: {
      producto,
    },
    revalidate: 60, // ISR: permite regenerar esta página cada 60 segundos
  };
};
