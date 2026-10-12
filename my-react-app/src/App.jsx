import CreateProduct from "./sections/CreateProduct";
import RegisterForm from "./sections/Form"
import ProductDetail from "./sections/ProductDetail";
import Products from "./sections/Products"
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/product/add" element={<CreateProduct/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>} />
    </Routes>
    </>
  )
}

export default App
