"use client";

// Este componente forma parte del portafolio profesional: portafolio-yeison-alvarez
// Renderiza una lista de clientes de una API de prueba como ejemplo de consumo de datos

import { useEffect, useState } from 'react';

type Cliente = {
  id: number;
  name: string;
  email: string;
};

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <h1 className="text-2xl font-bold mb-4">Listado de Clientes</h1>

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
