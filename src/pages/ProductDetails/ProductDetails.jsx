import React, { useEffect, useState } from "react";
import Image from "mui-image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Navbar from "../../components/common/Navbar";
// import { Product } from '../../components';
import { Rating, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Products from "../../components/HomeSection/Products";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/FetchingDataContext";
import { urlFor } from "../../lib/client";
import DetailsList from "./DetailList";
import loader from '../../assets/loader.svg';
import formatPriceWithCommas from "./HelperPrice";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = () => {
  // const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();
  const { slug } = useParams();

  useEffect(() => {
    getSingleProduct(slug);
    // console.log("singleproduct", singleProduct);
  }, [slug]);
  const { brand, category, image, price, reviews, name, details } =
    singleProduct;

  const handleBuyNow = () => {
    onAdd(singleProduct, qty);

    setShowCart(true);
  };

  const ratings = (reviews) => {
    if (reviews === 0) {
      return 0;
    } else {
      return reviews / 5;
    }
  };
  const getUrlIndexImg = () => {
    const indexImage = image && image[index];
    const source = indexImage ? indexImage.asset : null;

    const imageUrl = source ? urlFor(source).url() : "";

    return imageUrl;
  };

  if (isSingleLoading) {
    return <div className="loading-product" >Loading...</div>;
  }
  return (
   
    <Box>
      <Box
        className="description-section"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          gap: "40px",
          margin: "40px",
          marginTop: "60px",
          color: "#324d67",
        }}
      >
        <Box>
          <Box className="image-container">
            <Image
              src={getUrlIndexImg()}
              sx={{
                borderRadius: "15px",
                backgroundColor: "#ebebeb",
                width: "400px",
                height: "400px",
                cursor: "pointer",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#f02d34",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              // border: "2px solid pink"
            }}
          >
            {image?.map((item, i) => {
              const source = item.asset || null;
              const imageUrl = source ? urlFor(source).url() : "";

              return (
                <Image
                  key={i}
                  src={imageUrl}
                  style={{
                    borderRadius: "8px",
                    backgroundColor: i === index ? "#f02d34" : "#ebebeb",
                    width: "70px",
                    height: "70px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setIndex(i)}
                />
              );
            })}
          </Box>
        </Box>

        <Box className="product-detail-desc">
          <h1
          // sx={{
          //   fontSize:{
          //     xs:"6rem",
          //     sm:"6rem",
          //     md:'9rem',
          //     lg:'10rem'

          //   }
          // }}
          >{name}</h1>
          <Typography
            variant="p"
            sx={{
              fontWeight: "700",
              fontSize: "26px",
              marginTop: "20px",
              color: "#fffff",
            }}
          >
            {formatPriceWithCommas(price)} Ksh
          </Typography>
          <Box
            sx={{
              color: "#f02d34",
              marginTop: "10px",
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Box className="product-rating">
              <Rating
                name="read-only"
                value={ratings(reviews)}
                precision={0.1}
                readOnly
              />
            </Box>
            <p style={{ marginTop: "10px" }}>({reviews})</p>
          </Box>
          <Box
            sx={{
              width: {
                xs: "98%",
                sm: "auto",
                md: "fit-content",
                lg: "70%",
              },
            }}
          >
            <h3> Description</h3>
            <DetailsList details={details} />
          </Box>

          <Box
            className="product-quantity"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3>Quantity:</h3>
            <div>
              <Typography
                className="product-quanity-section"
                sx={{
                  display: "flex",
                  borderRadius: "1rem",
                  border: "1px solid gray",
                  padding: "6px",
                }}
              >
                <span
                  className="product-minus"
                  onClick={decQty}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                  }}
                >
                  <AiOutlineMinus />
                </span>
                <span
                  style={{
                    // fontSize: "16px",
                    // padding: "6px 12px",
                    // cursor: "pointer",
                    // borderRight: "1px solid gray",
                    // fontSize: "20px",
                    padding: "10px",
                  }}
                >
                 {qty}
                </span>
                <span
                  className="product-plus"
                  onClick={incQty}
                  style={{
                    // fontSize: "16px",
                    // padding: "6px 12px",
                    cursor: "pointer",
                    // color: "rgb(49, 168, 49)",
                    padding: "10px",
                  }}
                >
                  <AiOutlinePlus />
                </span>
                {/* <span className="minus" onClick={decQty}><AiOutlineMinus /></span> */}
                {/* <span className="num">{qty}</span> */}
                {/* <span className="plus" onClick={incQty}><AiOutlinePlus /></span> */}
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            <button
              type="button"
              onClick={() => onAdd(singleProduct, qty)}
              style={{
                padding:'1rem',
                marginBottom:'1rem',
                marginTop: "40px",
                fontSize: "18px",
                fontWeight: "500",
                backgroundColor: "white",
                color: "#f02d34",
                cursor: "pointer",
                width: "200px",
                borderRadius: "1rem",
                transform: "scale(1, 1)",
                transition: "transform 0.5s ease",
              }}
            >
              Add to Cart
            </button>

            <button
            onClick={handleBuyNow}
              type="button"
              className="buy-now"
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                width: "200px",
                borderRadius: "1rem",
                backgroundColor: "black",
                color: "white",
                border: "none",
                marginTop: "40px",
                fontSize: "18px",
                fontWeight: "500",
                cursor: "pointer",
                transform: "scale(1, 1)",
                transition: "transform 0.5s ease",
              }}
            >
              Buy Now
            </button>

            {/* <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button> */}
            {/* <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button> */}
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: "120px" }}>
        <h2
          style={{
            textAlign: "center",
            margin: "50px",
            fontSize: "28px",
          }}
        >
          People also viewed
        </h2>
        <Box
          sx={{
            // position: "relative",
            // height: "700px",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              // position: 'absolute',

              whiteSpace: "nowrap",
              willChange: "transform",
              animation: "marquee 15s linear infinite",
              // width: '180%',
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            <Products category={category} />
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default ProductDetails;
