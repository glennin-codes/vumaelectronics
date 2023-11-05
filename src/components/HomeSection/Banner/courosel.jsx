import React, { useRef, useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconButton, Skeleton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Slider from "react-slick";

import { useProductContext } from "../../../context/FetchingDataContext";
import { urlFor } from "../../../lib/client";

const ImageCarousel = () => {
  const { bannerImages } = useProductContext();
  const carouselRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(false); // State for tracking image loading

  useEffect(() => {
    // Preload images before displaying the carousel
    const preloadImages = async () => {
      const imagePromises = bannerImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = urlFor(image.image?.asset);
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, [bannerImages]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {bannerImages.map((image) => (
          <a
            href={`/explore/products?q=${encodeURIComponent(image.category)}`}
            key={image._id}
          >
            {imagesLoaded ? (
              <img
                src={urlFor(image.image?.asset)}
                style={{ width: "100%", height: "400px", objectFit: "fill" }}
              />
            ) : (
              <Skeleton variant="rectangular" width="100%" height={450} />
            )}
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
