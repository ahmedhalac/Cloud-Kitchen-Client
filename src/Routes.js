import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/views/Admin/MainView/Home/Home";
import AddUser from "./components/views/Admin/MainView/AddUser/AddUser";
import NotFound from "./components/NotFound";
import Restaurant from "./components/views/Admin/MainView/Restaurant/Restaurant";
import RestaurantType from "./components/views/Admin/MainView/Restaurant/RestaurantType";
import FoodType from "./components/views/Admin/MainView/Restaurant/FoodType";
import Home2 from "./components/views/RestaurantAdmin/MainView/Home/Home";
import AddDeliverer from "./components/views/RestaurantAdmin/MainView/AddDeliverer/AddDeliverer";
import FoodDetails from "./components/views/RestaurantAdmin/MainView/Food/FoodDetails";
import RestaurantEdit from "./components/views/RestaurantAdmin/MainView/Restaurant/RestaurantEdit";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/" component={Home} />
      <Route exact path="/admin/add-user" component={AddUser} />
      <Route exact path="/admin/restaurant" component={Restaurant} />
      <Route exact path="/admin/restaurant-type" component={RestaurantType} />
      <Route exact path="/admin/food-type" component={FoodType} />
      <Route exact path="/restaurant_admin" component={Home2} />
      <Route
        exact
        path="/restaurant_admin/add-deliverer"
        component={AddDeliverer}
      />
      <Route
        exact
        path="/restaurant_admin/food-details"
        component={FoodDetails}
      />
      <Route
        exact
        path="/restaurant_admin/restaurant"
        component={RestaurantEdit}
      />
      <Route component={NotFound} />
    </Switch>
  );
};
