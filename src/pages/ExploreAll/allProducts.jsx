import styled from "styled-components";

import Sort from "./Sort";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import { useFilterContext } from "../../context/FilterContext";
import { useEffect } from "react";
import { useProductContext } from "../../context/FetchingDataContext";


const Products = () => {
  const {clearFilters,products} = useFilterContext();
  const{getALLProducts }=useProductContext()
  useEffect(()=>{
     clearFilters();
 
  },[]);
  return (
    <Wrapper>
      <div className="products-wrapper container grid grid-filter-column">
        <div className="product-filter">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Products;
