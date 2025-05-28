"use client";

import { useRouter } from "next/navigation";
import { GetServerSideProps } from 'next';

type Tarea = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  tareas: Tarea[];
};

export default function TiempoReal({ tareas }: Props) {
  const router = useRouter();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tareas en tiempo real (SSR)</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

      <ul className="space-y-2">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="p-4 border rounded bg-white shadow">
            <strong>{tarea.title}</strong>
            <p className="text-sm text-gray-600">
              {tarea.completed ? 'Completada' : 'Pendiente'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const tareas: Tarea[] = await res.json();

  return {
    props: {
      tareas,
    },
  };
};
