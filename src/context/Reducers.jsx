export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            _id: action.payload.id,
            ...action.payload,
            qty: 1,
          },
        ],
      };
    case "REMOVE":
      const updatedCart = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case "INCREASE QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case "DECREASE QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
