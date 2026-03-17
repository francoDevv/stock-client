import { useProducts } from "../hooks/useProducts";
import ProductTable from "../components/ProductTable";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Productos</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;