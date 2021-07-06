import { GoCommentDiscussion } from 'react-icons/go'
import { withRouter } from 'react-router-dom';

// import image from "../../img/neüs-image.jpg";

const ProfileArticleCard = (props) => {

  const { file_abs_url, created_at, comments, slug, title, short_desc, cover_image } = props.article
  const urlIP = 'http://188.166.98.147/'

  return (
    <div className="article-created-content-list__card"
      onClick={() => {
        props.history.push(
          `/esas/${file_abs_url.split("/")[4]}-${slug
          }`
        );
      }}
    >
      <div className="article-created-content-list__card__header">
        <div className="article-created-content-list__card__header__image">
          <h1>{props.first_name.slice(0, 1)}{props.last_name.slice(0, 1)}</h1>
        </div>
        <div className="article-created-content-list__card__header__title">
          <h2>{props.first_name} {props.last_name}</h2>
          <time>{created_at.split('T')[0]}</time>
        </div>
      </div>
      <div className="article-created-content-list__card__body">
        <h1>{title}</h1>
        <h3>{short_desc.slice(0, 110)}...</h3>
        <img src={`${urlIP}${cover_image}`} alt="title" />
      </div>
      <div className="article-created-content-list__card__footer">
        <p> <span> <i><GoCommentDiscussion /></i></span> {comments.length}</p>
      </div>
    </div>
  );
};

export default withRouter(ProfileArticleCard);
