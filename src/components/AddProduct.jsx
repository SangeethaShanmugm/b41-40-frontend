import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export function AddProduct({ productList, setProductList }) {
  const [name, setName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unitsAvailable, setUnitsAvailable] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newProduct = {
      name: name,
      productImage: productImage,
      description: description,
      price: price,
      unitsAvailable: unitsAvailable,
    };
    fetch(`${API}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((data) => data.json())
      .then((res) => {
        setProductList(res);
        console.log(res);
      })
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h1>AddProduct</h1>
      <Button style={{ float: "right" }} onClick={() => navigate(-1)}>
        BACK
      </Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="productImage" sm={2}>
            Product Image
          </Label>
          <Col sm={10}>
            <Input
              id="productImage"
              name="productImage"
              placeholder="Enter productImage"
              type="text"
              onChange={(event) => {
                setProductImage(event.target.value);
              }}
              value={productImage}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="description" sm={2}>
            Product Description
          </Label>
          <Col sm={10}>
            <Input
              id="description"
              name="description"
              placeholder="Enter Description"
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              value={description}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="price" sm={2}>
            Product Price
          </Label>
          <Col sm={10}>
            <Input
              id="price"
              name="price"
              placeholder="Enter Price"
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              value={price}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="unitsAvailable" sm={2}>
            Product Units Available
          </Label>
          <Col sm={10}>
            <Input
              id="unitsAvailable"
              name="unitsAvailable"
              placeholder="Enter unitsAvailable"
              type="number"
              onChange={(event) => {
                setUnitsAvailable(event.target.value);
              }}
              value={unitsAvailable}
            />
          </Col>
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}
