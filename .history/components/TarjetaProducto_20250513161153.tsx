type TarjetaProductoProps = {
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  onVerDetalle: () => void;
};

export default function TarjetaProducto({
  titulo,
  descripcion,
  precio,
  imagen,
  onVerDetalle
}: TarjetaProductoProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={imagen}
        alt={`Imagen de ${titulo}`}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-bold">{titulo}</h3>
      <p className="text-gray-700 text-sm mb-2">{descripcion}</p>
      <p className="text-blue-600 font-semibold">${precio.toFixed(2)}</p>
      <button
        onClick={onVerDetalle}
        className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label={`Ver más sobre ${titulo}`}
      >
        Ver detalle
      </button>
    </div>
  );
}
