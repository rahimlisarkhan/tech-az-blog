import { FaEye } from "react-icons/fa";
import newsImage from "../../img/neüs-image.jpg";

const NewsProductCard = () => {
  return (
    <div className="news-product-content-list__card">
      <div className="news-product-content-list__card__overlay">
        <FaEye /> <span> 124 baxış</span>
      </div>

      <div className="news-product-content-list__card__desc">
        <h5>Garrix & Kygo, The Chainsmokers Style</h5>
        <h6>Chainsmokers Style </h6>
      </div>
      <div className="news-product-content-list__card__image">
        <img src={newsImage} alt="img-title" />
      </div>
    </div>
  );
};

export default NewsProductCard;
