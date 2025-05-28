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
      <Image
        src={imagen}
        alt={`Imagen de ${nombre}`}
        width={300}
        height={200}
        className="mb-4 rounded object-contain"
      />
      <h2 className="font-semibold">{nombre}</h2>
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
