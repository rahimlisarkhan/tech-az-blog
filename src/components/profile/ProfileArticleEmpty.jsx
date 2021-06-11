import { IoCloseOutline } from "react-icons/io5"


const ProfileArticleEmpty = () => {
    return(
        <div className='empty-card'>
        <div className='empty-card__image'>
            <i>
                <IoCloseOutline/>
            </i>
        </div>

        <div className='empty-card__title'>
                <h1>Hələ dərc edilmiş məqaləviz yoxdur !</h1>
        </div>

        </div>
    )
}


export default ProfileArticleEmpty