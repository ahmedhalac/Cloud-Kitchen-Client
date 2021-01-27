import React from "react";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Card } from "react-bootstrap";
import EditRestaurant from "./views/Admin/MainView/Restaurant/EditRestaurant";

const Cards = ({
  id = "",
  name = "",
  address = "",
  city = "",
  stars = "",
  typeId = "",
}) => {
  return (
    <div>
      <Card
        border="light"
        style={{
          width: "17rem",
          padding: "0",
          fontWeight: "normal",
        }}
      >
        <Card.Header style={{ textAlign: "center", fontWeight: "600" }}>
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Text>{address}</Card.Text>
          <Card.Text>{city}</Card.Text>
          <Card.Text>Broj zvjezdica: {stars}</Card.Text>
          <Card.Text>Tip: {typeId}</Card.Text>
          <EditRestaurant
            id={id}
            name={name}
            address={address}
            city={city}
            stars={stars}
            typeId={typeId}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
