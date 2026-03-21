import {Link} from "react-router-dom";
import { useMemo, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductTable from "../components/ProductTable";
import ProductFilters from "../components/ProductFilters";

const ProductsPage = () => {
  const { products, loading, error, removeProduct } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = products
    .map((product) => product.category)
    .filter((category) => category && category.trim() !== "")

    return [... new Set(uniqueCategories)];
  }, [products]);

  const filteredProducts = useMemo (() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategories = selectedCategory === "" || product.category === selectedCategory;

      return matchesSearch && matchesCategories;
    })
  }, [products, searchTerm, selectedCategory]);


  if (loading) return <p>⏳ Cargando productos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  console.log("PRODUCTS:", products);
  console.log("CATEGORIES:", categories);

  return (
    <>
      <div className="section-header">
        <h2>Productos</h2>
        <Link to = "/products/new">
            <button style={{fontSize : "15px"}}> + Crear producto</button>
        </Link>    

        <ProductFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />

        <button className="secondary" onClick={() => {
            setSearchTerm("");
            setSelectedCategory("");
          }}
        >
          Limpiar filtros
        </button>
        
      </div>
      <ProductTable products={filteredProducts} onDelete={removeProduct}/>
    </>
  );
};

export default ProductsPage;