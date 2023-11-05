import { createContext, useContext, useReducer } from 'react';
import { checkoutReducer } from '../Reducer/CheckoutReducer';

// Define your initial state
const initialState = {
  shippingAddress: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    city: '',
    location: '',
    zip: '',
    country: '',
    mpesaCode: '',
    number: ''
  },
 
}

// Create a context for the checkout data
const CheckoutContext = createContext(initialState)
export const useCheckout = () => {
    return useContext(CheckoutContext);
  };
  
export const CheckoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(checkoutReducer, initialState);
  
    return (
      <CheckoutContext.Provider value={{ state, dispatch }}>
        {children}
      </CheckoutContext.Provider>
    );
  };