import { useState } from "react";

const ProductForm = ({initialData = {}, onSubmit}) => {
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        price: initialData.price || "",
        stock: initialData.stock|| "",
        category: initialData.category || ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData, 
            [name] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            alert("El nombre es obligatorio");
            return;
        }

        if (formData.price === "") {
            alert("El precio es obligatorio");
            return;
        }

        if (formData.stock === "") {
            alert("El stock es obligatorio");
            return;
        }

        if (Number(formData.price) < 0) {
            alert("El precio no puede ser negativo");
            return;
        }

            if (Number(formData.stock) < 0) {
            alert("El stock no puede ser negativo");
            return;
        }

        const payload = {
            ...formData,
            name: formData.name.trim(),
            price: Number(formData.price),
            stock: Number(formData.stock)
        };

        await onSubmit(payload);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Precio</label>
                <input name="price" type="number" value={formData.price} onChange={handleChange} />
            </div>
            <div>
                <label>Stock</label>
                <input name="stock" type="number" value={formData.stock} onChange={handleChange} />
            </div>
            <div>
                <label>Categoria</label>
                <input name="category" value={formData.category} onChange={handleChange} />
            </div>

            <button type="submit">Guardar</button>
        </form>
    )
}

export default ProductForm;