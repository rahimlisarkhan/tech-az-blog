import {makeObservable, observable, action} from 'mobx';
import * as request from "../utils/request";


class NewsStore{
    
    @observable allNews
    
    constructor(){
        makeObservable(this);
    }

    //Request
    async getOrderActive(data,token) {
        const res = await request.getOrderActive(data,token);
        this.setOrderActive(res.data);

    }


    //Actions
    @action setOrderActive(order){
        this.orderHistoryActive = order;
    }

    
}

export const newsStore = new NewsStore();