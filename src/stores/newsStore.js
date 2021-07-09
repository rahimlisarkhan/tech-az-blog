import {
    makeAutoObservable
} from 'mobx';
import * as api from '../helper/api'

class NewsStore {

    allNews = null
    newsForSlug = null
    news = null
    videos = null
    articles = null
    nextUrl = null
    tags = null

    constructor() {
        makeAutoObservable(this);
    }

    //Request
    async getAllNews(params, data) {
        let res

        switch (params) {
            case 'mixdata/':
                res = await api.getAllNews(params, data)
            console.log(res);
                this.setAllNews(res.results, res.next)
                break
            case 'news/':
                res = await api.getAllNews(params, data)
                this.setNews(res.results, res.next)
                break
            case 'videos/':
                res = await api.getAllNews(params, data)
                this.setVideos(res.results, res.next)
                break
            case 'articles/':
                res = await api.getAllNews(params, data)
                this.setArticles(res.results, res.next)
                break
        }

    }

    async getNewsForSlug(params,data){
           let res = await api.getNewsForSlug(params, data)
        //    console.log(res);
        this.setNewsForSlug(res)
        }

     async getTags(params,data){
         let res = await api.getTags(params,data)
        //  console.log(res);
         this.setTags(res)
     }
        //Actions
    setAllNews(data, link) {
        this.allNews = data;
        this.nextUrl = link;
    }

    setNews(data, link) {
        this.news = data;
        this.nextUrl = link;
    }

    setVideos(data, link) {
        this.videos = data;
        this.nextUrl = link;
    }

    setArticles(data, link) {
        this.articles = data;
        this.nextUrl = link;
    }

    setNewsForSlug(data){
        this.newsForSlug = data
    }

    setTags(data){
        this.tags = data
    }
}

export default new NewsStore();