import {Link} from "react-router-dom";

const CreateProductPage = () => {
    return (
        <div>
            <h1>Crear producto</h1>
            <p>Formulario para crear</p>

            <Link to="/">
                <button>Volver</button>
            </Link>

        </div>
    )
}

export default CreateProductPage;