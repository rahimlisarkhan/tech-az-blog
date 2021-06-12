import { AiFillTag } from "react-icons/ai"
import newsImage from '../../img/neüs-image.jpg'
import { FaUserAlt,FaCalendarAlt , FaComments, FaEye} from "react-icons/fa"


const NewsProductContent = () => {

    return(
        <div className="news-product-content">
            <div className="news-product-content__title">
                <h1>
                     Garrix & Kygo, The Chainsmokers Style - Feeling Me 
                </h1>
                <div className="news-product-content__title__info">
                        <span>
                            <FaUserAlt/>
                            <p> Sarkhan Rahimli </p>
                        </span>
                        <span>
                            <AiFillTag/>
                            <p> valyuta </p>
                        </span>
                        <span>
                            <FaCalendarAlt/>
                            <p> 2021.11.05 </p>
                        </span>
                        <span>
                            <FaComments/>
                            <p> 124 rəy </p>
                        </span>
                        <span>
                            <FaEye/>
                            <p> 1250 baxış </p>
                        </span>
                 </div>

            </div>
            
            <div className="news-product-content__desc">
                <div className="news-product-content__desc__image">
                    <img src={newsImage} alt='news-title' />                
                </div>
                <div className="news-product-content__desc__info">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                </div>
            </div>

        </div>
    )
}

export default NewsProductContent