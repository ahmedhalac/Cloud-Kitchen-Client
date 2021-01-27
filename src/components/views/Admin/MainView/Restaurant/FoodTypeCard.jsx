import React from "react";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Card } from "react-bootstrap";
import EditFoodType from "./EditFoodType";
import DeleteFoodType from "./DeleteFoodType";

const FoodTypeCard = ({ id = "", name = "" }) => {
  return (
    <div>
      <Card
        border="light"
        style={{
          width: "17rem",
          padding: "0",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <EditFoodType id={id} name={name} />
          <DeleteFoodType id={id} name={name} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodTypeCard;
