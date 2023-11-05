export const checkoutReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: {
          ...state.shippingAddress,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};