import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import ProductCard from "./ProductCard";
import { Container, Button } from "reactstrap";

function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(`${API}/products`).then((res) => {
      if (res.status === 401) {
        console.log("Data Not Found");
      }
      console.log(res.data);
      setProductList(res.data);
    });
  };
  //delete product by ID
  const handleDelete = (id) => {
    axios.delete(`${API}/products/` + id).then((res) => {
      if (res.status === 200) {
        getProducts();
      }
    });
  };

  const navigate = useNavigate();
  return (
    <Container>
      <h1>ProductList</h1>
      <br />
      <Button onClick={() => navigate("products/addProduct")}>
        Create Product
      </Button>
      <br />
      <br />
      <div>
        {productList.map((item) => {
          return (
            <ProductCard
              key={item.id}
              value={item}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default ProductList;
