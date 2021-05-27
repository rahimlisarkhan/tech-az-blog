import {
    makeAutoObservable
} from 'mobx';
import * as api from "../helper/api";


class UserInfo {

    userToken = null;
    userInfo = null;
    userRegisterValidate = null;
    userLoginValidate = null;


    constructor() {
        makeAutoObservable(this);
    }


    //API REQUEST
    //AUTH
    async register(data) {
        const res = await api.register(data);
        console.log(res);

        if (res && res.status === 400) {
            this.setRegister(res.data);
        } else {
            // this.setToken(res.data.data.access_token);
            // localStorage.setItem('techaz', res.data.data.access_token)
            // this.setRegister(null)
            console.log(res);
        }
    }

    async login(data) {
        const res = await api.login(data);

        // if (res.ok) {
        //     // this.setToken(res.data.data.access_token);
        //     // localStorage.setItem('token', res.data.data.access_token)
        //     // this.setLogin(null)

        // } else {
        //     this.setLogin(res.data);
        // }
    }




    //Actions
    //Auth--
    setRegister(data) {
        this.userRegisterValidate = data
    }
    setLogin(data) {
        this.userLoginValidate = data;
    }

    setToken(token) {
        this.userToken = token;
    }

    //user
    setUser(data) {
        this.userInfo = data;
    }


}

export default new UserInfo();