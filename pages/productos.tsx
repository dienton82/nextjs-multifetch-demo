"use client";

import { useRouter } from "next/navigation";
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

type Producto = {
  id: number;
  title: string;
  price: number;
};

type Props = {
  productos: Producto[];
};

export default function Productos({ productos }: Props) {
  const router = useRouter();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Productos (SSR)</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productos.map(producto => (
          <div key={producto.id} className="p-4 border rounded shadow hover:shadow-md">
            <h2 className="font-semibold">{producto.title}</h2>
            <p className="text-sm text-gray-600">${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=6');
  const productos: Producto[] = await res.json();

  return {
    props: {
      productos,
    },
  };
};
