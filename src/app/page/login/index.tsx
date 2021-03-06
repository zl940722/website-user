import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {observer} from 'mobx-react';
import {Form, Icon, Input, Button} from 'antd';
import * as styles from './Login.pcss';
import {LoginStore} from "./LoginStore";

const FormItem = Form.Item;

interface LoginState {
    loading: boolean
}

// const logo = require('./resources/sunlogoTop.png');

@observer
class Login1 extends React.Component<any, LoginState> {

    public store: LoginStore;

    constructor() {
        super();
        this.store = new LoginStore();
    }

    public onChangeAccount = (e) => {
        this.store.changeAccount(e.target.value);
    }

    public onChangePassword = (e) => {
        this.store.changePassword(e.target.value);
    }

    public render() {
        const {data} = this.store;
        return (
            <div className={styles.container} style={{padding: '280px 0 144px 0', fontSize:'30px'}}>
                <div className={styles.topLog} style={{padding: 20}}>
                    {/*<img alt="logo" style={{width: '60px', height: '60px'}} src={logo}/> website*/}
                </div>
                <div style={{width: 368, margin: '0 auto'}}>
                    <Form>
                        <FormItem>
                            <Input
                                style={{width: 368, height: 40}}
                                value={data.username}
                                onChange={this.onChangeAccount}
                                prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                placeholder="请输入帐号"
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                style={{width: 368, height: 40}}
                                value={data.password}
                                onChange={this.onChangePassword}
                                prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button
                                style={{width: 368, height: 40}}
                                onClick={this.store.onSubmit}
                                type="primary"
                                className="login-form-button">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Login1/>, document.getElementById('app'));
// export default 'sss'
