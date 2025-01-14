import React from "react";
import "../css/app.css";
import {
  Box,
  Button,
  colors,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { ProductPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { Footer } from "./components/footer";

function App() {
  const location = useLocation();
  console.log("location:", location);

  return (
    <>
      {location.pathname === "/" ? "HomeNavbar/" : "OtherNavbar/"}
      <Switch>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
