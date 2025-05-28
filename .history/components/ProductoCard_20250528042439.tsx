import Image from 'next/image';

type Props = {
  nombre: string;
  precio: number;
  imagen: string;
  onAgregar: () => void;
};

export default function ProductoCard({ nombre, precio, imagen, onAgregar }: Props) {
  return (
    <div className="border rounded shadow p-4">
      <div className="relative w-full h-[200px] mb-4">
        <Image
          src={imagen}
          alt={`Imagen de ${nombre}`}
          fill
          className="rounded object-contain"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <h2 className="font-semibold text-lg">{nombre}</h2>
      <p className="text-sm text-gray-600">${precio.toFixed(2)}</p>
      <button
        onClick={onAgregar}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
