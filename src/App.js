import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
function App() {
  const [productList, setProductList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/products/addProduct"
            element={
              <AddProduct
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
          <Route path="/products/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
