import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../../lib/client";
import Skeleton from "@mui/material/Skeleton";
import { useProductContext } from "../../../context/FetchingDataContext";

// eslint-disable-next-line react/prop-types
function Product({ product }) {
  const { isLoading } = useProductContext();
  if (isLoading) {
    // Display a loading skeleton while product data is being fetched
    return (
      <Card>
        <Skeleton variant="rectangular" height={200} animation="wave" />
        <CardContent>
          <Skeleton animation="wave" width="80%" />
          <Skeleton animation="wave" width="60%" />
        </CardContent>
      </Card>
    );
  }

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { brand, price, reviews, image, name, slug } = product;

  const ratings = (reviews) => {
    if (reviews === 0) {
      return 0;
    } else {
      return reviews / 5;
    }
  };
  const firstImage = image && image[0];
  const source = firstImage ? firstImage.asset : null;

  const imageUrl = source
    ? urlFor(source).width(300).height(200).format("webp").url()
    : "";
  return (
    <NavLink
      // eslint-disable-next-line react/prop-types
      to={`/product/details/${slug?.current}`}
      className="product-card overflow-hidden my-4"
    >
      <figure className="product-image bg-red-200 ">
        <img
          src={imageUrl}
          alt={name}
          style={{ maxWidth: "100%", objectFit: "contain" }}
        />
      </figure>
      <CardContent className="product-content">
        <div className="text-red-900 tracking-wide text-[1.1rem]">{name}</div>
        <div>{brand}</div>
        <div>Ksh {price}</div>
        <Rating
          name="read-only"
          value={ratings(reviews)}
          precision={0.1}
          readOnly
        />
      </CardContent>
    </NavLink>
  );
}

export default Product;
