import { GetStaticPaths, GetStaticProps } from 'next';

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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=2');
  const productos: Producto[] = await res.json();

  const paths = productos.map((producto) => ({
    params: { id: producto.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking', // ✅ importante: no se necesita manejar isFallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const producto: Producto = await res.json();

  return {
    props: {
      producto,
    },
    revalidate: 60,
  };
};
