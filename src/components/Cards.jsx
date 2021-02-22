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
  deliver_distance = "",
}) => {
  return (
    <div>
      <Card
        border="light"
        style={{
          width: "17rem",
          padding: "0",
          marginBottom: "2em",
          fontWeight: "normal",
        }}
      >
        <Card.Header style={{ textAlign: "center", fontWeight: "600" }}>
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <i className="fas fa-utensils"></i> {typeId}
          </Card.Text>
          <Card.Text>
            <i className="fa fa-address-book-o" aria-hidden="true"></i>{" "}
            {address}
          </Card.Text>
          <Card.Text>
            <i className="fa fa-map-marker" aria-hidden="true"></i> {city}
          </Card.Text>
          <Card.Text>
            <i className="fa fa-star" aria-hidden="true"></i> {stars}
          </Card.Text>

          <Card.Text>
            <i className="fas fa-route" aria-hidden="true"></i>{" "}
            {deliver_distance}km
          </Card.Text>
          <EditRestaurant
            id={id}
            name={name}
            address={address}
            city={city}
            stars={stars}
            typeId={typeId}
            deliver_distance={deliver_distance}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
