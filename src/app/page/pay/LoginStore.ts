import {observable, action} from 'mobx';
import {LoginApi} from "api/LoginApi";
const redirectUrl = process.env.REDIRECT_URL;

const loginApi = new LoginApi();

export class LoginStore {

    @observable public data = {username: '', password: ''};
    @observable public loading = false;
    @observable public id:any = 0;

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

        const loginData: any = {
            biz_id: 1,
            item_id: this.id,
            remark: '1111'
        };
        window.open(redirectUrl + "main.html#/user","_self");
        return loginApi.submit_buy({data: loginData}).subscribe(data => {


        })

    }
}

export const store = new LoginStore();
