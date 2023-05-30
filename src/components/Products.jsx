import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Cart, CartState } from "../context/Context";
import Navbar from "./Navbar";

const Products = () => {
  const {
    state: { cart },
    dispatch,
    handleProducts,
    products,
  } = CartState();

  useEffect(() => {
    setTimeout(() => {
      handleProducts();
    }, 2000);
  }, [products]);

  return (
    <div>
      <Navbar />
      <h1 className="prod-page-title">Choose your favourite coffee</h1>
      <div className="grid-container">
        {products.map((coffee) => (
          <Card
            className="product_Card"
            key={coffee._id}
            sx={{ maxWidth: 345 }}
          >
            <CardMedia
              component="img"
              alt="Coffee_images"
              height="140"
              image={coffee.Image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {coffee.Title}
              </Typography>
              <Typography variant="body2" color="#675d50">
                {coffee.Description}
              </Typography>
              {/* <Typography variant="body2" color="#675d50">
                `Price is : ${coffee.Price}`
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{ color: "green" }}
                disabled={cart.includes(coffee._id)}
                onClick={() => {
                  dispatch({
                    type: "ADD",
                    payload: coffee,
                  });
                }}
              >
                Add
              </Button>
              <Button
                size="small"
                sx={{ color: "red" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE",
                    payload: coffee,
                  });
                }}
              >
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
