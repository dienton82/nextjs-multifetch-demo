"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Cliente = {
  id: number;
  name: string;
  email: string;
};

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Para navegación programática

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los datos');
        return res.json();
      })
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Listado de Clientes</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

      {loading && <p className="text-blue-500">Cargando clientes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {clientes.map((cliente) => (
          <li key={cliente.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{cliente.name}</h2>
            <p className="text-sm text-gray-600">{cliente.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

