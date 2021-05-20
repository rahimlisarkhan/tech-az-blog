
import Layout from "../../layout/Layout"


const NewsPageContainer = (props) => {


    return (
        <Layout>
             <div className="news-content">
                <div className="news-content__trend" onClick={() => props.history.push(`/xeberler/45`)}>
                    <div className="news-content__trend__image">
                        <img src={newsimage1} />
                    </div>
                    
                    <div className="news-content__trend__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    
                </div>

                <div className="news-content__last">
                    <div className="news-content__last__card"  onClick={() => props.history.push(`/xeberler/45`)}>
                    
                    <div className="news-content__last__card__image">
                        <img src={newsimage2} />
                    </div>
                    
                    <div className="news-content__last__card__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    </div>
                    <div className="news-content__last__card"  onClick={() => props.history.push(`/xeberler/45`)}>
                    
                    <div className="news-content__last__card__image">
                        <img src={newsimage2} />
                    </div>
                    
                    <div className="news-content__last__card__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    </div>
                    <div className="news-content__last__card">
                    
                    <div className="news-content__last__card__image">
                        <img src={newsimage2} />
                    </div>
                    
                    <div className="news-content__last__card__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    </div>
                    <div className="news-content__last__card">
                    
                    <div className="news-content__last__card__image">
                        <img src={newsimage2} />
                    </div>
                    
                    <div className="news-content__last__card__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    </div>
                    <div className="news-content__last__card">
                    
                    <div className="news-content__last__card__image">
                        <img src={newsimage2} />
                    </div>
                    
                    <div className="news-content__last__card__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    </div>
                    <div className="news-content__last__card">
                    
                    <div className="news-content__last__card__image">
                        <img src={newsimage2} />
                    </div>
                    
                    <div className="news-content__last__card__info">
                        <p>Xəbər • 14 dəqiqə əvvəl  </p>
                        <h1>Opel Manta GSe ElektroMOD — смесь классики и технологий</h1>
                    </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}

export default NewsPageContainer