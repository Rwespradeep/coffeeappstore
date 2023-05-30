import * as React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartState } from "../context/Context";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useState } from "react";

export default function CartDialog() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => {
        var priceStr = item.Price.substring(0, 1);
        var priceNum = parseInt(priceStr);
        return acc + Math.round(priceNum) * item.qty;
      }, 0)
    );
  }, [cart]);

  console.log(cart);

  return (
    <>
      <div className="card-dialog-bg">
        {cart.length > 0 ? (
          <>
            <ul className="cart-list-ul">
              {cart.map((item) => (
                <li className="cart-list-li" key={item._id}>
                  <span className="cart-item-title">{item.Title}</span>
                  <span className="cart-item-quantity">{item.qty}</span>
                  <div className="cart-btns">
                    <IconButton
                      color="tertiary"
                      aria-label="add"
                      sx={{ color: "green" }}
                      onClick={() => {
                        dispatch({
                          type: "INCREASE QUANTITY",
                          payload: item,
                        });
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      sx={{ color: "red" }}
                      color="tertiary"
                      aria-label="delete"
                      onClick={() => {
                        dispatch({
                          type: "DECREASE QUANTITY",
                          payload: item,
                        });
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-value-line">
              <span>Your cart value is : {total}/-</span>
            </div>
            <div className="checkout-btn">
              <Button sx={{ color: "green" }}>Check Out</Button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <span>Cart is empty dude!!</span>
          </div>
        )}
      </div>
    </>
  );
}
