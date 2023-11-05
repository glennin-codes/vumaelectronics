import React from "react";
import styled from "styled-components";
import Product from "./Product";


const GridView = ({ products }) => {
  
  return (
    <Wrapper className="explore-section">
      <div className="explore-container">
        {products.map((curElem) => (
          <div  key={curElem._id} className="explore-card">
           <Product key={curElem._id} {...curElem} />
           </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
`;


export default GridView;
