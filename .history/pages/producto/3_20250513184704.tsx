export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params?.id}`);
  const producto: Producto = await res.json();

  return {
    props: {
      producto,
    },
    revalidate: 60, // ✅ ISR: regenera cada 60 segundos si alguien visita la página
  };
};
