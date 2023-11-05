import Product from "./product/Product";
import "react-alice-carousel/lib/alice-carousel.css";
import { useFilterContext } from "../../context/FilterContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// eslint-disable-next-line react/prop-types
const Products = ({ category }) => {
  const { homeFiltered_Products } = useFilterContext();
  const products = homeFiltered_Products[category] || []; // Get filtered products for the category

  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        pagination: false,
        perPage: 5,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          1440: {
            perPage: 4,
          },
          640: {
            perPage: 2,
          },
          900: {
            perPage: 3,
          },
          // 400: {
          //   perPage:1,
          // }
        },
      }}
    >
      {products.map((product) => (
        <SplideSlide key={product._id}>
          <Product product={product} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Products;
