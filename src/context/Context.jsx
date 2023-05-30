import { createContext, useContext, useReducer, useState } from "react";
import axios from "../axios";
import { cartReducer } from "./Reducers";

export const Cart = createContext();

const Context = ({ children }) => {
  //this is to fetch products from my backend
  const [products, setProducts] = useState([]);
  const handleProducts = () => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  };

  //this i am using it to maintain the cart state at one place with use reducer
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return (
    //this is the context provider, when you use this.. remember to use it like const[state] = useContext(Cart)
    <Cart.Provider value={{ products, handleProducts, state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

//i am creating a custom hook here to access cart context everywhere in program
export const CartState = () => {
  return useContext(Cart);
};
