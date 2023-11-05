import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";

const BannerCard = () => {
  return (
    <div className="banner-cards">
      <div className="banner-card">
        <img src={b1} />
      </div>
      <div className="banner-card">
        <img src={b2} />
      </div>
      <div className="banner-card">
        <img src={b3} />
      </div>
      <div className="banner-card">
        <img src={b4} />
      </div>
      <div className="banner-card">
        <img src={b5} />
      </div>
      <div className="banner-card">
        <img src={b6} />
      </div>
    </div>
  );
};

export default BannerCard;
