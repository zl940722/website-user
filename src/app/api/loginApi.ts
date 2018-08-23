import {Observable as ObservableType} from "rxjs/Observable"
import {COLLECTION_FORMATS} from './Base'
import {createFetchWithStream} from 'util/createFetchWithStream'

export interface ILogin {
    username?: number;
    password?: string;
}

export class LoginApi {
    private base = `${COLLECTION_FORMATS.api}/sys`;

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

}
