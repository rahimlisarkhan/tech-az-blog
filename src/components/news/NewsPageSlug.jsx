import NewsProductContent from "./NewsProductContent";
import NewsProductContentList from "./NewsProductContentList";

const NewsPageSlug = () => {
  return (
    <div className="row p-0 m-0">
      <div className="col-lg-9">
        <NewsProductContent />
      </div>
      <div className="col-lg-3">
        <NewsProductContentList />
      </div>
    </div>
  );
};

export default NewsPageSlug;
