import { AiFillTag } from "react-icons/ai"
import { FaUserAlt, FaCalendarAlt, FaComments, FaEye } from "react-icons/fa"
import NewsPageVideoContent from "./NewsPageVideoContent"
import Carousel from "../carousel/Carousel"

const NewsProductContent = (props) => {

    const imgUrl = 'http://188.166.98.147/'

    return (
        <div className="news-product-content">
            <div className="news-product-content__title">
                <h1>
                    {props.news.title}
                </h1>
                <div className="news-product-content__title__info">
                    <span>
                        <FaUserAlt />
                        <p> {props.news.owner} </p>
                    </span>
                    <span>
                        <AiFillTag />
                        {props.news.tag.map((tag, index) => <p key={index}> {tag.title}  &nbsp; </p>)}
                    </span>
                    <span>
                        <FaCalendarAlt />
                        <p> {props.news.created_at.split('T')[0]} </p>

                    </span>
                    <span>
                        <FaComments />
                        <p> {props.news.comments.length} rəy </p>
                    </span>
                    <span>
                        <FaEye />
                        <p> {props.news.views} baxış </p>
                    </span>
                </div>

            </div>

            <div className="news-product-content__desc">
                <div className="news-product-content__desc__image">
                    <img src={`${imgUrl}${props.news.cover_image}`} alt='news-title' />
                </div>
                <div className="news-product-content__desc__info">
                    <p>
                        {props.news.content.slice(0, 500)}
                    </p>
                </div>
            </div>
            {props.news.video_link &&
                <div className="news-product-content__video">
                    <NewsPageVideoContent video={props.news.video_link} />
                </div>
            }
            <div className="news-product-content__desc">

                <div className="news-product-content__desc__info">
                    <p>
                        {props.news.content.slice(500, 900)}
                    </p>
                </div>
            </div>
            <div className="news-product-content__carousel">
                <Carousel imgUrl={imgUrl} images={props.news.videos_images ? props.news.videos_images : props.news.news_images} />
            </div>

            {props.news.content.length > 900 &&

                <div className="news-product-content__desc">

                    <div className="news-product-content__desc__info height-overflow">
                        <p>
                            {props.news.content.slice(900)}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default NewsProductContent