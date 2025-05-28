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
  imagen="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  onAgregar={() => alert("Producto agregado")}
/>
    </div>
  );
}
