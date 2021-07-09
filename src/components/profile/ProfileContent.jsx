import backgroundLogo from "../../img/Artboard 1.png";
import ProfileArticleCard from "./ProfileArticleCard";
import ProfileArticleEmpty from "./ProfileArticleEmpty";
import FormAddArticle from "./FormAddArticle";
import ProfileUserInfo from "./ProfileUserInfo"
import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";


const ProfileContent = (props) => {
  const [articlePanel, setArticlePanel] = useState(false);
  const [userInfoChangePanel, setUserInfoChangePanel] = useState(false);

  return (
    <>
      {/* //Profile content */}
      <div className="profile-content">
        <div className="profile-content__profile">
          <div className="profile-content__profile__header">
            <img src={backgroundLogo} />

            <div className="profile-content__profile__header__image">
              <div className="profile-content__profile__header__image__content">
                <p>
                  {props.userInfo && props.userInfo.first_name.slice(0, 1)}
                  {props.userInfo && props.userInfo.last_name.slice(0, 1)}
                </p>
              </div>
              <span>
                {props.userInfo && props.userInfo.first_name}{" "}
                {props.userInfo && props.userInfo.last_name}
              </span>

              <div className="profile-content__profile__header__image__form-group">

                <label htmlFor='image'>
                  <AiFillCamera />
                  <input type='file' id='image' />
                </label>
              </div>

            </div>
          </div>
          <div className="profile-content__profile__body">
            <div className="profile-content__profile__body__left">
              <ProfileUserInfo userInfo={props.userInfo} userInfoChangePanel={userInfoChangePanel} setUserInfoChangePanel={() => setUserInfoChangePanel(!userInfoChangePanel)} />
            </div>
            <div className="profile-content__profile__body__right">
              <div className="article-created-content">
                <div className="article-created-content__image">
                  <span>SR</span>
                </div>
                <div
                  className="article-created-content__btn"
                  onClick={() => {
                    setArticlePanel(true);
                  }}
                >
                  <button>Məqalə yaz...</button>
                </div>
              </div>

              <div className="article-created-content-list">
                {props.userInfo && props.userInfo.articles.length > 0 ? (
                  props.userInfo.articles.map((article) => (
                    <ProfileArticleCard first_name={props.userInfo.first_name}
                      last_name={props.userInfo.last_name}
                      article={article} />
                  ))
                ) : (
                  <ProfileArticleEmpty />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //profile Create article panel */}

      <div
        className={
          articlePanel ? "form-article form-article-show" : "form-article"
        }
      >
        <FormAddArticle setArticlePanel={() => setArticlePanel(false)} />
      </div>
    </>
  );
};

export default ProfileContent;
