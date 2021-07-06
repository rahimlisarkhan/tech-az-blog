import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Layout from "../../components/layout/Layout";
import NewsPageSlug from "../../components/news/NewsPageSlug";
import Loading from "../../components/ui/loading";
import stores from "../../stores";

const NewsForIDContainer = (props) => {

  const [lastInfo, setLastInfo] = useState(null);


  console.log(props);
  useEffect(() => {
    stores.newsStore.setNewsForSlug(null)

    !stores.newsStore.newsForSlug &&
      stores.newsStore.getNewsForSlug(
        `${props.match.params.id.split("-")[0]}/${props.match.params.id
          .split("-")
          .slice(1)
          .join("-")}`,
      );

    !stores.newsStore.allNews && stores.newsStore.getAllNews("mixdata/", {});

  }, [props.match.url]);

  useEffect(() => {
    const lastInfo =
      stores.newsStore.allNews && stores.newsStore.newsForSlug && stores.newsStore.allNews.reverse().filter(news => news.slug !== stores.newsStore.newsForSlug.slug).slice(-5);

    setLastInfo(lastInfo);
  }, [stores.newsStore.newsForSlug])


  if (!stores.newsStore.newsForSlug) {
    return <Loading />;
  }

  return (
    <Layout>
      <NewsPageSlug news={stores.newsStore.newsForSlug} newsList={lastInfo} />
    </Layout>
  );
};

export default withRouter(observer(NewsForIDContainer));
