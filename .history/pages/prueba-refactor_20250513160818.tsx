import ProductoCard from '../components/ProductoCard'; // ✅ ruta relativa

export default function PruebaRefactor() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <ProductoCard
        nombre="Zapato deportivo"
        precio={100}
        imagen="https://via.placeholder.com/150"
        onAgregar={() => alert('Producto agregado')}
      />
    </div>
  );
}
