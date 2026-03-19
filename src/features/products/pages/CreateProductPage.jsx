import {useNavigate} from "react-router-dom";
import ProductForm from "../components/ProductForm.jsx"
import { createProduct } from "../services/productService";

const CreateProductPage = () => {
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        try {
            await createProduct(data);
            navigate("/");
        } catch (error) {
            alert("Error al crear el producto");
        }
    };
    
    return (
        <div>
            <h1>Crear producto</h1>
            <ProductForm onSubmit={handleCreate}></ProductForm>
        </div>
    )
}

export default CreateProductPage;