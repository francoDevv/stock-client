import {Link} from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductTable from "../components/ProductTable";

const ProductsPage = () => {
  const { products, loading, error, removeProduct } = useProducts();

  if (loading) return <p>⏳ Cargando productos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Productos</h2>
          <Link to = "/products/new">
              <button style={{fontSize : "15px"}}> + Crear producto</button>
          </Link>    

      </div>
      <ProductTable products={products} onDelete={removeProduct}/>
    </>
  );
};

export default ProductsPage;