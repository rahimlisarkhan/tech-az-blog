import { FaEye } from "react-icons/fa";
import { withRouter } from "react-router-dom";

const NewsProductCard = (props) => {
  const {type, views, title, slug, short_desc, cover_image, file_abs_url } = props.news

  console.log(type.toLowerCase());
  return (
    <div className="news-product-content-list__card"
      onClick={() => {
        props.history.push(
          `/esas/${type.toLowerCase()}-${slug
          }`
        );
      }}
    >
      <div className="news-product-content-list__card__overlay">
        <FaEye /> <span> {views} baxış</span>
      </div>

      <div className="news-product-content-list__card__desc">
        <h5>{title}</h5>
        <h6>{short_desc.slice(0, 70)}... </h6>
      </div>
      <div className="news-product-content-list__card__image">
        <img src={cover_image} alt="img-title" />
      </div>
    </div>
  );
};

export default withRouter(NewsProductCard);

// http://localhost:3000/esas/videos-lenovo-thinkbook-14-g2-1
// http://localhost:3000/esas/videos-lenovo-thinkbook-14-g2-1