import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/cart";
import { IconButton, Badge } from "@mui/material";
import { useProductContext } from "../../context/FetchingDataContext";
import ProductSearch from "./SearchBar";

const Navbar = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (trimmedQuery === "") {
      setFilteredProducts([]); // Show all products when searchQuery is empty
    } else {
      const filtered = products.filter(
        (product) =>
          product.brand.toLowerCase().includes(trimmedQuery) ||
          product.name.toLowerCase().includes(trimmedQuery) ||
          product.category.toLowerCase().includes(trimmedQuery)
        // Search by product brand
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  // const {
  //   filters: { text },
  //   filter_products,
  //   updateFilterValue,

  // } = useFilterContext();

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="main-navbar flex justify-between px-8 items-center py-6 bg-red-200 w-full mb-8">
      <Link to="/" className="flex-1">
        <p className="text-3xl font-bold">Spark Electronics</p>
      </Link>

      <ProductSearch
        filteredProducts={filteredProducts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex justify-end items-center flex-1 gap-4">
        <Link to={`/explore/products`}>
          <h2 className="text-bg">Explore all</h2>
        </Link>

        <div>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setShowCart(true)}
          >
            <Badge badgeContent={totalQuantities} color="error">
              <ShoppingCartIcon className="w-6 h-6 text-gray-900 cursor-pointer" />
            </Badge>
          </IconButton>
        </div>
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
