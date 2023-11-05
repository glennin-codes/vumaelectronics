import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleImageRenderer = ({ imgUrl }) => {
  const navigate = useNavigate();

  return (
    <figure
      className="h-[25rem] w-full my-8 cursor-pointer"
      onClick={() =>
        navigate(`/explore/products?q=${encodeURIComponent("SmartPhones")}`)
      }
    >
      <img src={imgUrl} alt={imgUrl} className="h-full w-full object-fill" />
    </figure>
  );
};
export default SingleImageRenderer;
