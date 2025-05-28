import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      {loading ? (
        <p className="text-blue-500">Cargando...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {usuarios.map((user) => (
            <div key={user.id} className="p-4 border rounded shadow hover:shadow-md transition">
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
             <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ⬅️ Volver
      </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}