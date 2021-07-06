import Layout from "../../components/layout/Layout";
import stores from "../../stores";
import { useEffect, useState } from "react";
import Loading from "../../components/ui/loading";
import { observer } from "mobx-react";
import ProfileContent from "../../components/profile/ProfileContent";


const ProfilePageContainer = (props) => {
  const [lastInfo, setLastInfo] = useState(null);
  const [allInfo, setAllInfo] = useState(null);


  useEffect(() => {
    !stores.newsStore.allNews && stores.newsStore.getAllNews("mixdata/", {});
    const lastInfo =
      stores.newsStore.allNews && stores.newsStore.allNews.reverse().slice(-1);
    const allInfo =
      stores.newsStore.allNews && stores.newsStore.allNews.slice(1);

    setLastInfo(lastInfo);
    setAllInfo(allInfo);
  }, [stores.newsStore.allNews]);

  console.log(stores.userStore.userInfo);

  return !lastInfo || !allInfo ? (
    <Layout>
      <Loading />
    </Layout>
  ) : (
    <Layout>
      <ProfileContent userInfo={stores.userStore.userInfo} />
    </Layout>
  );
};
export default observer(ProfilePageContainer);
