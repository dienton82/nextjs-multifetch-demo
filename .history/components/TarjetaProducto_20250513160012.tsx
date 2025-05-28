type Producto = {
  nombre: string;
  precio: number;
  imagen: string;
};

export default function TarjetaProducto({ nombre, precio, imagen }: Producto) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={imagen}
        alt={`Imagen del producto ${nombre}`}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{nombre}</h2>
      <p className="text-gray-600">${precio.toFixed(2)}</p>
      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={`Agregar ${nombre} al carrito`}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
