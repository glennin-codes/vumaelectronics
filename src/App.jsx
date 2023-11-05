import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/ExploreAll/allProducts";
// import Api from "./utils/Api";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Style/GlobalStyle";
import { useProductContext } from "./context/FetchingDataContext";
import Loader from "./components/HomeSection/Loader/Loader";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Box from "@mui/material/Box";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/CheckOut/CheckOut";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const theme = {
    font: {
      main: "'Poppins', sans-serif",
    },
    font_size: {
      h1: "2",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      h5: "2rem",
      h6: "2rem",
      p: "2rem",
      small: "1rem",
    },
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#dee5f3",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  const { isLoading } = useProductContext();

  return isLoading ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Toaster />
          <GlobalStyle />
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/product/details/:slug"
                element={<ProductDetails />}
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/explore/products" element={<Products />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
