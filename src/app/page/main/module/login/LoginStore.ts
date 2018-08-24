import {observable, action} from 'mobx';
import {LoginApi} from "api/LoginApi";

const loginApi = new LoginApi();
// const redirectUrl = process.env.REDIRECT_URL;

export class LoginStore {

    constructor(){
        loginApi.getBannerList({model:''}).subscribe(data => {
            if (data.success) {
                sessionStorage.setItem('LoginType', 'LoginIn');
                sessionStorage.setItem('Token', data.token);
                sessionStorage.setItem('menu', JSON.stringify(data.menuList))
                //  window.location.href = redirectUrl + 'main.html#/';

            }
        })
    }

    @observable public data = {username: '', email: '', password: ''};
    @observable public loading = false;
    @observable public isLog = false;
    @action
    public changeIsLog = (username) => {
        this.isLog = username;
    };
    @action
    public changeAccount = (username) => {
        this.data.username = username;
    };

    @action
    public changePassword = (password) => {
        this.data.password = password;
    };

    @action
    public changeEmail = (password) => {
        this.data.email = password;
    };

    @action
    public toggleLoading = () => {
        this.loading = !this.loading;
    };


    @action
    public onSubmit = () => {

        const md5 = require("md5-node")
        const loginData: any = {
            biz_id:1,
            username: this.data.username,
            password: md5(this.data.password),
            nickname:'zl',
            email:this.data.email,
            mobile:'13081937220'
        }

        return loginApi.loginIn1({data: loginData}).subscribe(data => {
            console.log(data , 'data')
            if (data.success) {
                // sessionStorage.setItem('LoginType', 'LoginIn');
                // sessionStorage.setItem('Token', data.token);
                // sessionStorage.setItem('menu', JSON.stringify(data.menuList))
              //  window.location.href = redirectUrl + 'main.html#/';

            }
        })

    }
}
