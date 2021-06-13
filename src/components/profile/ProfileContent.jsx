import backgroundLogo from "../../img/Artboard 1.png";
import { FaCalendar, FaGraduationCap, FaUserCheck } from "react-icons/fa";
import { MdBusinessCenter, MdEmail } from "react-icons/md";
import ProfileArticleCard from "./ProfileArticleCard";
import ProfileArticleEmpty from "./ProfileArticleEmpty";
import FormAddArticle from "./FormAddArticle";



const ProfileContent  = (props) => {

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
                  {props.userInfo &&
                    props.userInfo.first_name.slice(0, 1)}
                  {props.userInfo &&
                    props.userInfo.last_name.slice(0, 1)}
                </p>
              </div>
              <span>
                {props.userInfo &&
                  props.userInfo.first_name}{" "}
                {props.userInfo &&
                  props.userInfo.last_name}
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
                    {props.userInfo &&
                      props.userInfo.username}
                  </p>
                  <p>
                    <i>
                      <MdEmail />
                    </i>
                    {props.userInfo &&
                      props.userInfo.email}
                  </p>
                  <p>
                    <i>
                      <FaCalendar />
                    </i>
                    {props.userInfo &&
                    props.userInfo.birthday
                      ? props.userInfo.birthday
                      : "doğum tarixi"}
                  </p>
                  <p>
                    <i>
                      <FaGraduationCap />
                    </i>
                    {props.userInfo &&
                    props.userInfo.education
                      ? props.userInfo.education
                      : "təhsil"}
                  </p>
                  <p>
                    <i>
                      <MdBusinessCenter />
                    </i>
                    {props.userInfo &&
                    props.userInfo.position
                      ? props.userInfo.position
                      : "iş yeri"}
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
                  <button>Məqalə yaz...</button>
                </div>
              </div>

              <div className="article-created-content-list">
                {props.userInfo.articles.length > 0 ? (
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
    
    <div className="form-article">
        <FormAddArticle/>
    </div>
                    
    </>    
    )
}


export default ProfileContent 