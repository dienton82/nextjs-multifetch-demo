type Producto = {
  nombre: string;
  precio: number;
  imagen: string;
  onAgregar: () => void;
};

export default function ProductoCard({ nombre, precio, imagen, onAgregar }: Producto) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <img
        src={imagen}
        alt={`Imagen de ${nombre}`}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{nombre}</h2>
      <p className="text-gray-600">${precio.toFixed(2)}</p>
      <button
        onClick={onAgregar}
        className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={`Agregar ${nombre} al carrito`}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
