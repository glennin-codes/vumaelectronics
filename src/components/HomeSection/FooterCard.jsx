import f1 from "../../assets/f1.png";
import f21 from "../../assets/f21.jpg";
import f22 from "../../assets/f22.png";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.png";
import f51 from "../../assets/f51.png";
import f52 from "../../assets/f52.jpg";
import f6 from "../../assets/f6.jpg";

const FooterCards = () => {
  return (
    <div className="footer-cards">
      <div className="footer-card">
        <a href={`/explore/products?q=${encodeURIComponent("Tvs")}`}>
          <img src={f1} />
        </a>
      </div>

      <div className="footer-card-grid">
        <div className="footer-card">
          <a href={`/explore/products?q=${encodeURIComponent("Audio")}`}>
            <img src={f21} />
          </a>
        </div>
        <div className="footer-card">
          <a href={`/explore/products?q=${encodeURIComponent("Gaming")}`}>
            <img src={f22} />
          </a>
        </div>
      </div>

      <div className="footer-card">
        <a href={`/explore/products?q=${encodeURIComponent("Tvs")}`}>
          <img src={f3} />
        </a>
      </div>
      <div className="footer-card">
        <a href={`/explore/products?q=${encodeURIComponent("SmartPhones")}`}>
          <img src={f4} />
        </a>
      </div>

      <div className="footer-card-grid">
        <div className="footer-card">
          <a href={`/explore/products`}>
            <img src={f51} />
          </a>
        </div>
        <div className="footer-card">
          <a href={`/explore/products?q=${encodeURIComponent("Gaming")}`}>
            <img src={f52} />
          </a>
        </div>
      </div>
      <div className="footer-card">
        <a href={`/explore/products?q=${encodeURIComponent("Computers")}`}>
          <img src={f6} />
        </a>
      </div>
    </div>
  );
};

export default FooterCards;
