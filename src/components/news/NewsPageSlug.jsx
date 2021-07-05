import NewsProductContent from "./NewsProductContent";
import NewsProductContentList from "./NewsProductContentList";

const NewsPageSlug = (props) => {

  console.log(props);

  return (
    <div className="row p-0 m-0">
      <div className="col-lg-9">
        <NewsProductContent news={props.news} />
      </div>
      <div className="col-lg-3">
        <NewsProductContentList />
      </div>
    </div>
  );
};

export default NewsPageSlug;
