import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "../styles/Button";
import Image from "mui-image";
import formatPriceWithCommas from "../ProductDetails/HelperPrice";
import { Button } from "@mui/material";
import { urlFor } from "../../lib/client";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { slug, name, image, price, details } = curElem;
          const firstImage = image && image[0];
          const source = firstImage ? firstImage.asset : null;
        
          const imageUrl = source ? urlFor(source).url() : "";
          return (
            <div className="card grid grid-two-column">
              <figure>
                <Image 
                className="Image"
                sx={{
                  height:"100%",
                  width:"100%"
                }}
                 src={imageUrl} 
                 alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                {formatPriceWithCommas(price)}
                </p>
                <p>{details?.slice(0, 90)}...</p>

                <NavLink to={`/product/details/${slug.current}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 2.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    height:100%;
  }
  
  .card {
    width:95%;
    border-radius:1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 0.1rem solid rgb(170 170 170 / 40%);
  height:300px;
  transition:1s;
  img{
    height: 20vh;
    width: 100%;
    overflow: hidden;
  }
  :hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;