import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { getProductById, updateProduct } from "../services/productService";

const EditProductPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect (() => {
        loadProduct();
    })

    const loadProduct = async () => {
        try {
            const data = await getProductById(id);
            setProduct(data);
        } catch (error) {
            alert("Error al cargar producto")
        }
    }

    const handleUpdate = async (data) => {
        try {
            await updateProduct(id, data);
            navigate("/");
        } catch (error) {
            alert("Error al actualizar el producto")
        }
    }

    if(!product) return <p>Cargando ... </p>

    return (
        <div>
            <h1>Editar Producto</h1>
            <p>ID del producto: {id}</p>
            <ProductForm initialData={product} onSubmit={handleUpdate}></ProductForm>
        </div>
    )
}

export default EditProductPage;