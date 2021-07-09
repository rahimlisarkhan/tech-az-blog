
import Layout from "../../components/layout/Layout"
import image from '../../img/neüs-image.jpg'
import stores from "../../stores"
import { useEffect, useState } from "react";
import Loading from "../../components/ui/loading";
import { observer } from "mobx-react";


const NewsPageContainer = (props) => {

    const [lastInfo, setLastInfo] = useState(null)
    const [allInfo, setAllInfo] = useState(null)


    useEffect(() => {

        !stores.newsStore.news && stores.newsStore.getAllNews('news/', {})
        const lastInfo = stores.newsStore.news && stores.newsStore.news.reverse().slice(-1)
        const allInfo = stores.newsStore.news && stores.newsStore.news.reverse().slice(1)

        console.log(lastInfo);
        setLastInfo(lastInfo)
        setAllInfo(allInfo)

    }, [stores.newsStore.news])



    return (
        !lastInfo || !allInfo
            ? <Layout><Loading /></Layout>
            : <Layout>
                <div className="news-content">
                    <div className="news-content__trend" onClick={() => {
                        props.history.push(
                            `/xeberler/news-${lastInfo[0].slug
                            }`
                        );
                    }
                    }

                    >
                        <div className="news-content__trend__image">
                            <img src={lastInfo[0].cover_image} alt={lastInfo[0].title} />

                            {console.log(lastInfo[0])}
                        </div>

                        <div className="news-content__trend__info">
                            <p>Xəbər • {lastInfo[0].created_at.split('T')[0]} {lastInfo[0].created_at.split('T')[1].slice(0, 5)} tarixində  yükləndi </p>
                            <h1>{lastInfo[0].title}</h1>
                        </div>

                    </div>

                    <div className="news-content__last">
                        {allInfo && allInfo.map((news, index) => (

                            <div className="news-content__last__card" key={index} onClick={() =>
                                props.history.push(
                                    `/xeberler/news-${news.slug
                                    }`
                                )
                            }
                            >

                                <div className="news-content__last__card__view">
                                    <p>{news.view}</p>
                                </div>

                                <div className="news-content__last__card__image">
                                    {/* <img src={news.image} alt='test' /> */}
                                    <img src={image} alt='test' />

                                </div>

                                <div className="news-content__last__card__info">
                                    <p>Xəbər • {news.created_at.split('T')[0]} {news.created_at.split('T')[1].slice(0, 5)} tarixində yükləndi </p>
                                    <h1>{news.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
    )
}

export default observer(NewsPageContainer)
