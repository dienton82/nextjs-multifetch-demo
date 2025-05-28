"use client";

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext, createContext } from 'react';

// Tipo de producto
type Producto = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

// Props esperadas
type Props = {
  producto: Producto;
};

export default function ProductoPage({ producto }: Props) {
  const router = useRouter();
  const [likes, setLikes] = useState(0);

  const TemaContext = createContext('light');
  const tema = useContext(TemaContext);

  useEffect(() => {
    console.log('Página cargada');
  }, []);

  if (router.isFallback) {
    return <p className="text-center p-4">Cargando producto...</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{producto.title}</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

      <img
        src={producto.image}
        alt={producto.title}
        className="w-full h-64 object-contain mb-4"
      />
      <p className="text-gray-700 mb-2">{producto.description}</p>
      <p className="text-green-600 text-lg font-semibold">Precio: ${producto.price}</p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        ❤️ Me gusta ({likes})
      </button>

      <p className="text-sm text-gray-500 mt-2">Tema actual: {tema}</p>
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
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const producto: Producto = await res.json();

  return {
    props: { producto },
    revalidate: 60,
  };
};
