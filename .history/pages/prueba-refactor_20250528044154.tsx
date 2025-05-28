"use client";

import { useRouter } from "next/navigation";
import ProductoCard from "../components/ProductoCard";

export default function PruebaRefactor() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Producto Refactorizado</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

      <ProductoCard
  nombre="Zapato deportivo"
  precio={100}
  imagen="https://images.unsplash.com/photo-1618354691230-eabe94f885ee?auto=format&fit=crop&w=400&q=80"
  onAgregar={() => alert("Producto agregado")}
/>
    </div>
  );
}
