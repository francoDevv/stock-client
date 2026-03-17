import {Link, useParams} from "react-router-dom";

const EditProductPage = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Editar Producto</h1>
            <p>ID del producto: {id}</p>

            <Link to="/">
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default EditProductPage;