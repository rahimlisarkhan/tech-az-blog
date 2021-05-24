import {makeAutoObservable} from 'mobx';
import * as api from '../helper/api'

class NewsStore{
    
    allNews = null
    nextUrl = null
    
    constructor(){
        makeAutoObservable(this);
    }

    //Request
    async getAllNews() {
        const res = await api.getAllNews()
        this.setAllNews(res.results,res.next)
    }

    //Actions
    setAllNews(data,link){
        this.allNews = data;
        this.nextUrl = link;
    }
    
}

export default new NewsStore();