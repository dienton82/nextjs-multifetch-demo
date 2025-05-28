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
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tareas en tiempo real (SSR)</h1>
      <ul className="space-y-2">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="p-4 border rounded bg-white shadow">
            <strong>{tarea.title}</strong>
            <p className="text-sm text-gray-600">{tarea.completed ? 'Completada' : 'Pendiente'}</p>
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
