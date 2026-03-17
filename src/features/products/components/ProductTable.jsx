const ProductTable = ({ products }) => {
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
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;