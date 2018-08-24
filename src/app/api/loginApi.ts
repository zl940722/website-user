import {Observable as ObservableType} from "rxjs/Observable"
import {COLLECTION_FORMATS} from './Base'
import {createFetchWithStream} from 'util/createFetchWithStream'
import {IBanner} from "dto/Banner";

export interface ILogin {
    username?: number;
    password?: string;
}

export interface ILogin1 {
    biz_id: number
    username?: number;
    password?: string;
    nickname?: number;
    email?: string;
    mobile?: number;
}

export class LoginApi {
    private base = `${COLLECTION_FORMATS.api}/user`;

    public loginIn = (params: { data: ILogin }, option = {}): ObservableType<any> => {
        return createFetchWithStream<any>(
            {
                ...{
                    url: `${this.base}/login`,
                    method: 'post',
                    data: params.data
                },
                ...option
            }
        );
    };

    public loginIn1 = (params: { data: ILogin1 }, option = {}): ObservableType<any> => {
        return createFetchWithStream<any>(
            {
                ...{
                    url: `${this.base}/register`,
                    method: 'post',
                    data: params.data
                },
                ...option
            }
        );
    };

    public getBannerList = (params: {}, option = {}): ObservableType<any> => {
        return createFetchWithStream<{
            rows: IBanner[],
            total: number,
            page: number
        }>(
            {
                ...{
                    url:`${this.base}/user_info`,
                    method: 'get',
                    params: params
                },
                ...option
            }
        );
    };

}
