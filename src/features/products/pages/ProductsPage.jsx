import {Link} from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductTable from "../components/ProductTable";

const ProductsPage = () => {
  const { products, loading, error, removeProduct } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Productos</h1>
        <Link to = "/products/new">
            <button>Crear producto</button>
        </Link>    

      <ProductTable products={products} onDelete={removeProduct}/>
    </div>
  );
};

export default ProductsPage;