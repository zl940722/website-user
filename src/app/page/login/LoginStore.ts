import {observable, action} from 'mobx';
import {LoginApi} from "api/LoginApi";

const loginApi = new LoginApi();
const redirectUrl = process.env.REDIRECT_URL;

export class LoginStore {

    @observable public data = {username: '', password: ''};
    @observable public loading = false;

    @action
    public changeAccount = (username) => {
        this.data.username = username;
    };

    @action
    public changePassword = (password) => {
        this.data.password = password;
    };

    @action
    public toggleLoading = () => {
        this.loading = !this.loading;
    };


    @action
    public onSubmit = () => {

        const md5=require("md5-node")
        const loginData: any = {
            username: this.data.username,
            password: md5(this.data.password)
        }

        return loginApi.loginIn({data: loginData}).subscribe(data => {
            if (data.success) {
                sessionStorage.setItem('LoginType', 'LoginIn');
                sessionStorage.setItem('Token', data.token);
                sessionStorage.setItem('menu', JSON.stringify(data.menuList))
                window.location.href = redirectUrl + 'main.html#/';

            }
        })

    }
}
