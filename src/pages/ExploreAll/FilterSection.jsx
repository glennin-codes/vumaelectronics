import styled from "styled-components";
// import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../../context/FilterContext";
import formatPriceWithCommas from "../ProductDetails/HelperPrice";
import { Button } from "@mui/material";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel
} from '@chakra-ui/react'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FilterSection = () => {
  const navigate = useNavigate();


  const {
    filters: { text, category,brand, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
    clearSearch
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const brandData = getUniqueData(all_products, "brand");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('q')  
   
const  getCategory=(e)=>{
  updateFilterValue(e);
  if (productName) {
    navigate('/explore/products', { replace: true });
  }
  clearSearch();


}

  const handleClick = () => {
    // Call clearFilters function to clear filters
    clearSearch();
    clearFilters();

    // Check if productName is present before navigating
    if (productName) {
      navigate('/explore/products', { replace: true });
    }
  }
  return (
    <Wrapper className="filter-section">
      {/* <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div> */}
<Accordion defaultIndex={[0]} allowMultiple>
<AccordionItem>
    <h6>
      <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
      <h3>Category</h3>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h6>
      <div className="filter-category">
        <AccordionPanel pb={4}>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
              key={index}
              type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={getCategory}>
                {curElem}
              </button>
            );
          })}
        </div>
        </AccordionPanel>
      </div>
          </AccordionItem>
      {/* <div className="filter-category">
        <h3>Brand</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div> */}
<AccordionItem>
<h6>
      <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
      <h3>Brand</h3>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h6>
      <div className="filter-company">
      <AccordionPanel>
        <form action="#">
          <select
            name="brand"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {brandData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="brand">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
        </AccordionPanel>
      </div>
      </AccordionItem>
      {/* <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div> */}
<AccordionItem>
<h6>
      <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
      <h3>Price</h3>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h6>
      <div className="filter_price">
        <AccordionPanel>
        <p>
          {formatPriceWithCommas(price)}
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
        </AccordionPanel>
      </div>
      </AccordionItem>
      </Accordion>
      <div className="filter-clear">
        <Button className="btn" onClick={handleClick}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    // width: 2rem;
    
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #000;
    margin:2rem 0;
    color: #fff;
    transition:1s;
    :hover{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;

export default FilterSection;