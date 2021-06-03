import Layout from "../../components/layout/Layout";
import stores from "../../stores";
import { useEffect, useState } from "react";
import Loading from "../../components/ui/loading";
import backgroundLogo from "../../img/Artboard 1.png";
import { observer } from "mobx-react";
import { FaUserCheck } from "react-icons/fa";

const ProfilePageContainer = (props) => {
  const [lastInfo, setLastInfo] = useState(null);
  const [allInfo, setAllInfo] = useState(null);

  useEffect(() => {
    !stores.newsStore.allNews && stores.newsStore.getAllNews("mixdata/", {});
    const lastInfo =
      stores.newsStore.allNews && stores.newsStore.allNews.reverse().slice(-1);
    const allInfo =
      stores.newsStore.allNews && stores.newsStore.allNews.slice(1);

    console.log(stores.userStore.userInfo);

    setLastInfo(lastInfo);
    setAllInfo(allInfo);
  }, [stores.newsStore.allNews]);

  return !lastInfo || !allInfo ? (
    <Layout>
      <Loading />
    </Layout>
  ) : (
    <Layout>
      <div className="profile-content">
        <div className="profile-content__profile">
          <div className="profile-content__profile__header">
            <img src={backgroundLogo} />

            <div className="profile-content__profile__header__image">
              <div className="profile-content__profile__header__image__content">
                <p>
                  {stores.userStore.userInfo &&
                    stores.userStore.userInfo.first_name.slice(0, 1)}
                  {stores.userStore.userInfo &&
                    stores.userStore.userInfo.last_name.slice(0, 1)}
                </p>
              </div>
              <span>
                {stores.userStore.userInfo &&
                  stores.userStore.userInfo.first_name}{" "}
                {stores.userStore.userInfo &&
                  stores.userStore.userInfo.last_name}
              </span>
            </div>
          </div>
          <div className="profile-content__profile__body">
            <div className="profile-content__profile__body__left">
              <div className="profile-user-info">
                <h1>hesab məlumatları</h1>
                <div className="profile-user-info__content">
                  <p>
                    <i>
                      <FaUserCheck />
                    </i>
                    {stores.userStore.userInfo &&
                      stores.userStore.userInfo.username}
                  </p>
                  <p>
                    <i>
                      <FaUserCheck />
                    </i>
                    {stores.userStore.userInfo &&
                      stores.userStore.userInfo.email}
                  </p>
                  <p>
                    <i>
                      <FaUserCheck />
                    </i>
                    {stores.userStore.userInfo &&
                      stores.userStore.userInfo.birthday ? stores.userStore.userInfo.birthday : 'doğum tarixi'}
                  </p>
                  <p>
                    <i>
                      <FaUserCheck />
                    </i>
                    {stores.userStore.userInfo &&
                      stores.userStore.userInfo.education ? stores.userStore.userInfo.education : 'təhsil'}
                  </p>
                  <p>
                    <i>
                      <FaUserCheck />
                    </i>
                    {stores.userStore.userInfo &&
                      stores.userStore.userInfo.position ? stores.userStore.userInfo.position : 'iş yeri'}
                  </p>
                </div>
                <button className="profile-user-info__created">
                Məlumatları dəyişdir
              </button>
              </div>
            
             
            </div>
            <div className="profile-content__profile__body__right">
                  <div className="article-created-content">
                  <div className="article-created-content__image">
                    <span>SR</span>
                  </div>
                  <div className="article-created-content__btn">
                    <button>
                      Məqalə yaz...
                    </button>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default observer(ProfilePageContainer);
