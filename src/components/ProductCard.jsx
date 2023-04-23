import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function ProductCard({ value, handleDelete }) {
  const navigate = useNavigate();

  return (
    <Card
      className="card-style"
      style={{
        width: "18rem",
      }}
    >
      <img className="pic" alt="Sample" src={value.productImage} />
      <CardBody>
        <CardTitle tag="h5">{value.name}</CardTitle>
        <CardText>{value.description}</CardText>
        <div className="card-text">
          <CardText>Rs. {value.price}</CardText>
          <CardText>Units. {value.unitsAvailable}</CardText>
        </div>
        <Button color="danger" onClick={() => handleDelete(value.id)}>
          <AiOutlineDelete />
        </Button>
        <Button
          color="success"
          onClick={() => navigate(`/products/editProduct/${value.id}`)}
        >
          <AiOutlineEdit />
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
