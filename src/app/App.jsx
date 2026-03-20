import {Route, Routes} from "react-router-dom";
import ProductPage from '../features/products/pages/ProductsPage.jsx'
import CreateProductPage from "../features/products/pages/CreateProductPage.jsx"
import EditProductPage from "../features/products/pages/EditProductPage.jsx"

function App() {
  return (
    <div className="container">
      <h1 className="title">Stock Manager</h1>
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/products/new" element={<CreateProductPage />}></Route>
        <Route path="/products/edit/:id" element={<EditProductPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
