import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./product.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./context/FetchingDataContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import {
  StyledEngineProvider,


} from "@mui/material";
import { StateContext } from "./context/StateContext.jsx";
import { CheckoutProvider } from "./context/CheckOutContext.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
const rootElem = document.getElementById("root");
const root = ReactDOM.createRoot(rootElem);

const theme = createTheme({
  typography: {
    fontFamily: ['Arvo', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'].join(','),
   p:{
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.3rem',
    },
    '@media (min-width:900px)': {
      fontSize: '2.2rem',
    }
   },
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '4.5rem',
      },
      '@media (min-width:1400px)': {
        fontSize: '5.5rem',
      }
    },
    h4: {
      fontSize: '1.3rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      }
    }
  }
});

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <AppProvider>
            <FilterContextProvider>
              <StateContext>
                <CheckoutProvider>
                  <App />
                </CheckoutProvider>
              </StateContext>
            </FilterContextProvider>
          </AppProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </ChakraProvider>
  </React.StrictMode>
);
