import {observable, action} from 'mobx'
import {LoginApi} from "api/LoginApi";
import {message} from 'antd';

const api = new LoginApi();

class Store {
    @ observable public list: any = [];


    // 注册
    @action
    public load = () => {


        return api.list({model: {biz_id: 1, page: '1',page_size:20}}).subscribe(data => {
            console.log(data, 'data')
            if (data.success) {
                message.success(data.data);

            }
        })

    }

}

export const store = new Store();
