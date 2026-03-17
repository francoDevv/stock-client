import { useEffect, useState } from "react";
import { deleteProductById, getProducts } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (id) => {
    try {
      await deleteProductById(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError("Error al eliminar el producto")
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
    reload: loadProducts,
    removeProduct
  };
};