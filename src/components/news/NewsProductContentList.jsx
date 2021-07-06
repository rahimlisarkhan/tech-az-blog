
import NewsProductCard from './NewsProductCard'


const NewsProductContentList = (props) => {
  return (
    <div className="news-product-content-list">
      <div className="news-product-content-list__title">
        <h4>Son yüklənənlər</h4>
      </div>
        {props.newsList && props.newsList.map(news => <NewsProductCard key={news.id} news={news} />)}

    </div>
  );
};

export default NewsProductContentList;
