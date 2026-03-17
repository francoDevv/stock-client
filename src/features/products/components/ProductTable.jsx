import {Link} from "react-router-dom";

const ProductTable = ({ products, onDelete }) => {
  if (!products.length) {
    return <p>No hay productos cargados</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
            <td>
              <Link to={`/products/edit/${product._id}`}>
                <button>Editar</button>
              </Link>

              <button onClick={() => {
                const confirmDelete = window.confirm("¿Seguro que querés eliminar este producto?");
                if (confirmDelete) {
                  onDelete(product._id)
                }
              }}>
                Eliminar
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;