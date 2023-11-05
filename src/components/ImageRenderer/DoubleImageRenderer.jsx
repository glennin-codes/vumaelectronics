import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DoubleImageRenderer = ({ imgUrl1, imgUrl2 }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-6  my-8 md:my-0">
      <figure
        className="h-[7rem] md:h-[25rem] w-full cursor-pointer"
        onClick={() =>
          navigate(`/explore/products?q=${encodeURIComponent("SmartPhones")}`)
        }
      >
        <img
          src={imgUrl2}
          alt={imgUrl1}
          className="md:object-contain h-[130%] md:h-full"
        />
      </figure>{" "}
      <figure
        className="h-[7rem] md:h-[25rem] w-full cursor-pointer"
        onClick={() =>
          navigate(`/explore/products?q=${encodeURIComponent("SmartPhones")}`)
        }
      >
        <img
          src={imgUrl1}
          alt={imgUrl2}
          className="md:object-contain h-[130%] md:h-full"
        />
      </figure>
    </div>
  );
};
export default DoubleImageRenderer;
