import {Route, Routes} from "react-router-dom";
import ProductPage from '../features/products/pages/ProductsPage.jsx'
import CreateProductPage from "../features/products/pages/CreateProductPage.jsx"
import EditProductPage from "../features/products/pages/EditProductPage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage></ProductPage>}></Route>
      <Route path="/products/new" element={<CreateProductPage></CreateProductPage>}></Route>
      <Route path="/products/edit/:id" element={<EditProductPage></EditProductPage>}></Route>
    </Routes>
  )
}

export default App
