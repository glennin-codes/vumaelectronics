import { Typography } from "@mui/material";
import { RxDotFilled } from "react-icons/rx";
import { Box } from "@mui/material";
import Products from "../../components/HomeSection/Products.jsx";
import { useFilterContext } from "../../context/FilterContext";
import Banner from "../../components/HomeSection/Banner/Banner";
import BannerCard from "../../components/HomeSection/BannerCard";
import FooterCards from "../../components/HomeSection/FooterCard";
import DoubleImageRenderer from "../../components/ImageRenderer/DoubleImageRenderer.jsx";
import SingleImageRenderer from "../../components/ImageRenderer/SingleImageRenderer.jsx";

import image1 from "../../assets/iphone_banner.jpg";
import image2 from "../../assets/smart_phone_big.png";

// import Footer from '../components/Footer';
// import Api from '../utils/Api';

const Home = () => {
  const { all_products } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = [...new Set(newVal)]);
  };
  const categoryData = getUniqueData(all_products, "category");

  return (
    <Box component="div" sx={{ padding: "0rem 2rem" }}>
      <Banner />
      <BannerCard />
      <Box marginTop={5} component="div">
        {categoryData.slice(0, 2).map((data, index) => (
          <Box key={index} component="div">
            <div className="mt-9 flex justify-start items-center space-x-2">
              <RxDotFilled className="text-[4rem] text-red-600" />
              <Typography
                sx={{
                  fontWeight: "bold",
                  letterSpacing: ".3rem",
                  fontSize: "1.5rem",
                  fontFamily: "sans-serif",
                  color: "black",
                }}
              >
                {`${data}`.toUpperCase()}
              </Typography>
            </div>
            <Products category={data} />
          </Box>
        ))}
      </Box>
      <DoubleImageRenderer imgUrl1={image1} imgUrl2={image2} />
      <Box marginTop={5} component="div">
        {categoryData.slice(2, -2).map((data, index) => (
          <Box key={index} component="div">
            <div className="mt-9 flex justify-start items-center space-x-2">
              <RxDotFilled className="text-[4rem] text-red-600" />
              <Typography
                sx={{
                  fontWeight: "bold",
                  letterSpacing: ".3rem",
                  fontSize: "1.5rem",
                  fontFamily: "sans-serif",
                  color: "black",
                }}
              >
                {`${data}`.toUpperCase()}
              </Typography>
            </div>
            <Products category={data} />
          </Box>
        ))}
      </Box>
      <SingleImageRenderer imgUrl={image2} />
      <Box marginTop={5} component="div">
        {categoryData.slice(-1).map((data, index) => (
          <Box key={index} component="div">
            <div className="mt-9 flex justify-start items-center space-x-2">
              <RxDotFilled className="text-[4rem] text-red-600" />
              <Typography
                sx={{
                  fontWeight: "bold",
                  letterSpacing: ".3rem",
                  fontSize: "1.5rem",
                  fontFamily: "sans-serif",
                  color: "black",
                }}
              >
                {`${data}`.toUpperCase()}
              </Typography>
            </div>
            <Products category={data} />
          </Box>
        ))}
      </Box>
      <FooterCards />
    </Box>
  );
};

export default Home;
