import * as React from 'react'
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
export class Login extends React.Component<any, LoginState> {

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

    public onChangeEmail = (e) => {
        this.store.changeEmail(e.target.value);
    }

    public loginIn = () => {
        this.store.changeIsLog(false)
    }
    public loginOut = () => {
        this.store.changeIsLog(true)
    }

    public render() {
        const {data} = this.store;
        return (
            <div className={styles.container} style={{padding: '280px 0 144px 0', fontSize: '30px'}}>
                <div className={styles.topLog} style={{padding: 20}}>
                    {/*<img alt="logo" style={{width: '60px', height: '60px'}} src={logo}/> website*/}
                </div>
                <div style={{width: 368, margin: '0 auto'}}>
                    {
                        this.store.isLog ?
                            <div>
                                <h1 style={{textAlign: 'center'}}>登陆</h1>
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
                                            登陆
                                        </Button>
                                        <p style={{textAlign: 'center'}}><span>还没有账号 ? </span><a
                                            onClick={this.loginIn}>立即注册</a></p>
                                    </FormItem>
                                </Form>
                            </div> :
                            <div>
                                <h1 style={{textAlign: 'center'}}>加入我们</h1>
                                <Form>
                                    <FormItem>
                                        <Input
                                            style={{width: 368, height: 40}}
                                            value={data.username}
                                            onChange={this.onChangeAccount}
                                            prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                            placeholder="用户名"
                                        />
                                    </FormItem>
                                    <FormItem>
                                        <Input
                                            style={{width: 368, height: 40}}
                                            value={data.email}
                                            onChange={this.onChangeEmail}
                                            prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                            placeholder="邮箱"
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
                                    {/*<FormItem>*/}
                                        {/*<Input*/}
                                            {/*style={{width: 368, height: 40}}*/}
                                            {/*value={data.password}*/}
                                            {/*onChange={this.onChangePassword}*/}
                                            {/*prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"*/}
                                            {/*placeholder="确认密码"/>*/}
                                    {/*</FormItem>*/}
                                    <FormItem>
                                        <Button
                                            style={{width: 368, height: 40}}
                                            onClick={this.store.onSubmit}
                                            type="primary"
                                            className="login-form-button">
                                            注册
                                        </Button>
                                        <p style={{textAlign: 'center'}}><span>已有账号</span><a
                                            onClick={this.loginOut}>登陆</a></p>
                                    </FormItem>
                                </Form>
                            </div>
                    }

                </div>
            </div>
        )
    }
}

// ReactDOM.render(<Login1/>, document.getElementById('app'));
// export default 'sss'
