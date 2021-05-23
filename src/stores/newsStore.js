import {makeAutoObservable} from 'mobx';


class NewsStore{
    
    allNews =null
    constructor(){
        makeAutoObservable(this);
    }

    //Request
    async getAllNews() {

    }


    //Actions
    setAllNews(data){
        this.allNews = data;
    }

    
}

export default new NewsStore();