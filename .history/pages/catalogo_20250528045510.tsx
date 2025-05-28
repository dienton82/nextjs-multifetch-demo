"use client";

import { useRouter } from "next/navigation";
import TarjetaProducto from "../components/TarjetaProducto";

export default function Catalogo() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Catálogo de Productos</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <TarjetaProducto
          titulo="Audífonos Bluetooth"
          descripcion="Audífonos con cancelación de ruido y 20 horas de batería."
          precio={89.99}
          imagen="https://images.unsplash.com/photo-1705614055301-8e2612b354e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onVerDetalle={() => alert("Ir al detalle del producto")}
        />
        <TarjetaProducto
          titulo="Smartwatch"
          descripcion="Monitor de ritmo cardíaco, pasos y GPS."
          precio={129.99}
          imagen="https://via.placeholder.com/300x200"
          onVerDetalle={() => alert("Ver detalle del smartwatch")}
        />
      </div>
    </div>
  );
}
