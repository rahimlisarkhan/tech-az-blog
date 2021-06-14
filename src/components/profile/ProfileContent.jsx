import backgroundLogo from "../../img/Artboard 1.png";
import { FaCalendar, FaGraduationCap, FaUserCheck } from "react-icons/fa";
import { MdBusinessCenter, MdCamera, MdEmail } from "react-icons/md";
import ProfileArticleCard from "./ProfileArticleCard";
import ProfileArticleEmpty from "./ProfileArticleEmpty";
import FormAddArticle from "./FormAddArticle";
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
                <AiFillCamera/>
                  <input type='file' id='image'/>
                </label>
              </div>

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
                    {!userInfoChangePanel ? (
                      props.userInfo && props.userInfo.username
                    ) : (
                      <input
                        type="text"
                        defaultValue={props.userInfo && props.userInfo.username}
                      />
                    )}
                  </p>
                  <p>
                    <i>
                      <MdEmail />
                    </i>


                    {!userInfoChangePanel ? (
                      props.userInfo && props.userInfo.email
                    ) : (
                      <input
                        type="text"
                        defaultValue={props.userInfo && props.userInfo.email}
                      />
                    )}
                  </p>
                  <p>
                    <i>
                      <FaCalendar />
                    </i>

              {!userInfoChangePanel ? (
                      props.userInfo && props.userInfo.birthday
                      ? props.userInfo.birthday
                      : "doğum tarixi"
                    ) : (
                      <input
                        type="date"
                        defaultValue={props.userInfo && props.userInfo.email}
                      />
                    )}
                  </p>
                  <p>
                    <i>
                      <FaGraduationCap />
                    </i>

{!userInfoChangePanel ? (
                      props.userInfo && props.userInfo.education
                      ? props.userInfo.education
                      : "təhsil"
                    ) : (
                      <input
                        type="text"
                        defaultValue={props.userInfo && props.userInfo.education}
                        placeholder={props.userInfo && props.userInfo.education ? props.userInfo.education : 'təhsiliniz?' }

                      />
                    )}
                  </p>
                  <p>
                    <i>
                      <MdBusinessCenter />
                    </i>

{!userInfoChangePanel ? (
                      props.userInfo && props.userInfo.position
                      ? props.userInfo.position
                      : "iş yeri"
                    ) : (
                      <input
                        type="text"
                        defaultValue={props.userInfo && props.userInfo.position}
                        placeholder={props.userInfo && props.userInfo.position ? props.userInfo.position : 'iş yeriniz?' }

                      />
                    )}
                  </p>
                </div>
                {!userInfoChangePanel ? (
                  <button
                    onClick={() => setUserInfoChangePanel(!userInfoChangePanel)}
                    className="profile-user-info__created"
                  >
                    məlumatları dəyişdir
                  </button>
                ) : (
                  <button
                    onClick={() => setUserInfoChangePanel(!userInfoChangePanel)}
                    className="profile-user-info__created bg-success-1"
                  >
                    yaddaşda saxla
                  </button>
                )}
              </div>
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
                    <ProfileArticleCard article={article} />
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
