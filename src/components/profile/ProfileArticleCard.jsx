import {GoCommentDiscussion} from 'react-icons/go'

import image from "../../img/neüs-image.jpg";

const ProfileArticleCard = () => {
  return (
    <div className="article-created-content-list__card">
      <div className="article-created-content-list__card__header">
        <div className="article-created-content-list__card__header__image">
          <h1>SR</h1>
        </div>
        <div className="article-created-content-list__card__header__title">
          <h2>Sarkhan Rahimli</h2>
          <time>12.05.2020</time>
        </div>
      </div>
      <div className="article-created-content-list__card__body">
        <h1>Xiami resmi unvanini tanitdi</h1>
        <img src={image} alt="title" />
      </div>
      <div className="article-created-content-list__card__footer">
          <p> <span> <i><GoCommentDiscussion/></i></span> 4</p>
      </div>
    </div>
  );
};

export default ProfileArticleCard;
