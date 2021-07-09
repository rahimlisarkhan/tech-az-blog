
import Layout from "../../components/layout/Layout"
import stores from "../../stores"
import { useEffect, useState } from "react";
import Loading from "../../components/ui/loading";
import { observer } from "mobx-react";


const ArticlesPageContainer = (props) => {

    const [lastInfo, setLastInfo] = useState(null)
    const [allInfo, setAllInfo] = useState(null)


    useEffect(() => {

        !stores.newsStore.articles && stores.newsStore.getAllNews('articles/', {})
        const lastInfo = stores.newsStore.articles && stores.newsStore.articles.reverse().slice(-1)
        const allInfo = stores.newsStore.articles && stores.newsStore.articles.reverse().slice(1)

        setLastInfo(lastInfo)
        setAllInfo(allInfo)

    }, [stores.newsStore.articles])


    return (
        !lastInfo || !allInfo
            ? <Layout><Loading /></Layout>
            : <Layout>
                <div className="news-content">
                    <div className="news-content__trend" onClick={() => {
                        props.history.push(
                            `/meqaleler/articles-${lastInfo[0].slug
                            }`
                        );
                    }}>
                        <div className="news-content__trend__image">
                            <img src={lastInfo[0].cover_image} alt='test' />
                        </div>

                        <div className="news-content__trend__info">
                            <p>Xəbər • {lastInfo[0].created_at.split('T')[0]} {lastInfo[0].created_at.split('T')[1].slice(0, 5)} tarixində  yükləndi </p>
                            <h1>{lastInfo[0].title}</h1>
                        </div>

                    </div>

                    <div className="news-content__last">
                        {allInfo && allInfo.map(news => (

                            <div className="news-content__last__card" key={news.slug} onClick={() => {
                                props.history.push(
                                    `/articles/articles-${news.slug
                                    }`
                                )
                            }}>

                                <div className="news-content__last__card__view">
                                    <p>{news.view}</p>
                                </div>

                                <div className="news-content__last__card__image">
                                    <img src={news.cover_image} alt='test' />
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

export default observer(ArticlesPageContainer)
