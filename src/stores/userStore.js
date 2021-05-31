import {
    makeAutoObservable
} from 'mobx';
import * as api from "../helper/api";


class UserInfo {

    userToken = null;
    userInfo = null;
    userRegisterValidate = null;
    userLoginValidate = null;
    loginPanel=null

    constructor() {
        makeAutoObservable(this);
    }

    //API REQUEST
    //AUTH
    async register(data) {
        const res = await api.register(data);

        if (res && res.status === 400) {

            this.setRegister(res.data);
        } else if (res && res.status === 201) {
            this.setOpenClosePanel(true)
            // this.setToken(res.data.data.access_token);
            // localStorage.setItem('techaz', res.data.data.access_token)
            // this.setRegister(null)
        }
    }

    async login(data) {
        const res = await api.login(data);

        if (res && res.status === 400) {

            this.setLogin(res.data);
        } else if (res && res.status === 200) {
            localStorage.setItem('techaz',res.data.data.token)
            this.setRegister(null)
            this.setToken(res.data.data.token)
            this.setUser(res.data.data)
        }
        
    }


    async getUser(params,data,token) {
        const res = await api.getUser(params,data,token);
        this.setUser(res)
    }


    //Actions
    //Auth--
    setRegister(data) {
        this.userRegisterValidate = data
    }
    setOpenClosePanel(bool) {
        this.loginPanel = bool
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