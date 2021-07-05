import { observer } from "mobx-react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Layout from "../../components/layout/Layout";
import NewsPageSlug from "../../components/news/NewsPageSlug";
import Loading from "../../components/ui/loading";
import stores from "../../stores";

const NewsForIDContainer = (props) => {
  useEffect(() => {
    stores.newsStore.setNewsForSlug(null)

    !stores.newsStore.newsForSlug &&
      stores.newsStore.getNewsForSlug(
        `${props.match.params.id.split("-")[0]}/${props.match.params.id
          .split("-")
          .slice(1)
          .join("-")}`,
      );
  }, []);

  
  if (!stores.newsStore.newsForSlug) {
    return <Loading />;
  }

  return (
    <Layout>
      <NewsPageSlug news={stores.newsStore.newsForSlug} />
    </Layout>
  );
};

export default withRouter(observer(NewsForIDContainer));
