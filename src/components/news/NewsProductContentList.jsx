
import NewsProductCard from './NewsProductCard'


const NewsProductContentList = () => {
  return (
    <div className="news-product-content-list">
      <div className="news-product-content-list__title">
        <h4>Son yüklənənlər</h4>
      </div>
      <NewsProductCard/>
      <NewsProductCard/>
      <NewsProductCard/>
      <NewsProductCard/>
      <NewsProductCard/>

    </div>
  );
};

export default NewsProductContentList;
