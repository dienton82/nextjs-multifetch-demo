export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const productos: Producto[] = await res.json();

  const paths = productos.map((producto) => ({
    params: { id: producto.id.toString() },
  }));

  return {
    paths,
    fallback: false, // ✅ cambiar a 'blocking' si quieres soporte para más ids en producción
  };
};
