import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import { Box } from "@mui/material";
// import ProductCarousel from '../components/home/courosel';
import ImageCarousel from "./courosel";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../../context/FetchingDataContext";
import { urlFor } from "../../../lib/client";

const Banner = () => {
  const navigate = useNavigate();
  const { topImagesGrid, bottomImagesGrid } = useProductContext();

  const theme = useTheme();
  const isMediumBig = useMediaQuery(theme.breakpoints.up("md"));
  const allImages = topImagesGrid.concat(bottomImagesGrid);

  const mobileSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    easing: "ease-in-out",
  };

  return (
    <>
      {isMediumBig && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: { xs: "25rem", md: "25rem" },
          }}
        >
          <Box
            className="carousel-main"
            sx={{ width: { xs: "100%", md: "70%" } }}
          >
            <ImageCarousel />
          </Box>
          <Box
            className="carousel-menu"
            sx={{ width: { xs: "100%", md: "30%" } }}
          >
            {allImages.map((image) => (
              <Grid key={image._id} item xs={6}>
                <a
                  href={`/explore/products?q=${encodeURIComponent(
                    image.category
                  )}`}
                >
                  <img
                    className="carousel-image"
                    src={urlFor(image.image?.asset)}
                    alt={image.category}
                    style={{ width: "100%" }}
                  />
                </a>
              </Grid>
            ))}
          </Box>
        </Box>
      )}
      {!isMediumBig && (
        <Box
          sx={{
            height: { xs: "25rem", md: "25rem" },
          }}
        >
          <Slider {...mobileSettings}>
            {allImages.map((image) => (
              <div key={image._id}>
                <a
                  href={`/explore/products?q=${encodeURIComponent(
                    image.category
                  )}`}
                  key={image._id}
                >
                  <img
                    src={urlFor(image.image?.asset)}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "fill",
                    }}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </Box>
      )}
    </>
  );
};
export default Banner;
