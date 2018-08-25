import * as React from 'react'
import {observer} from 'mobx-react';
import {Form, Icon, Input, Button} from 'antd';
import * as styles from './Login.pcss';
import {store} from "../store";

const FormItem = Form.Item;
const moment = require('moment');


interface LoginState {
    loading: boolean
}


@observer
export class Login extends React.Component<any, LoginState> {

    public onChangeAccount = (e) => {
        store.changeAccount(e.target.value);
    }

    public onChangePassword = (e) => {
        store.changePassword(e.target.value);
    }

    public onChangeEmail = (e) => {
        store.changeEmail(e.target.value);
    }

    public loginIn = () => {
        store.changeIsLog(false)
    }
    public loginOut = () => {
        store.changeIsLog(true)
    }

    public render() {
        const {data} = store;
        return (
            <div>
                {
                    // 是否已经是登录状态
                    store.isLogIn ?
                        <div className={styles.defaultInf}>
                            <h1 style={{color: '#629aa9'}}>Tables</h1>
                            <div className={styles.defaultInfDiv}>
                                <div className={styles.defaultInfDivSpan}>
                                    <span className={styles.defaultInfDivSpan1}>个人信息表:</span>
                                    <div className={styles.defaultInfTh}>
                                        <span>用户名</span>
                                        <span>邮箱</span>
                                        <span>注册时间</span>
                                    </div>
                                    <div className={styles.defaultInfTd}>
                                        <span>{store.defaultUserInf.username}</span>
                                        <span>{store.defaultUserInf.email}</span>
                                        <span>
                                            {
                                                store.defaultUserInf.gmt_create !== undefined ?
                                                    moment(1535104095).format('YYYY-MM-DD') :
                                                    null
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.defaultInfDivSpan}>
                                    <span className={styles.defaultInfDivSpan1}>已购买:</span>
                                    <div className={styles.defaultInfTh1}>
                                        <span>商品名</span>
                                        <span>商品价格</span>
                                        <span>收货地址</span>
                                        <span>购买日期</span>
                                    </div>
                                    <div className={styles.defaultInfTd1}>
                                        {
                                            store.purchased_list.map(item => (
                                                <div>
                                                    <span>{item.title}</span>
                                                    <span>{item.price}</span>
                                                    <span>{item.adress}</span>
                                                    <span>
                                                        {
                                                            store.defaultUserInf.gmt_create !== undefined ?
                                                                moment(1535104095).format('YYYY-MM-DD') :
                                                                null
                                                        }
                                                        </span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={styles.container} style={{padding: '280px 0 144px 0', fontSize: '30px'}}>
                            <div className={styles.topLog} style={{padding: 20}}>
                                {/*<img alt="logo" style={{width: '60px', height: '60px'}} src={logo}/> website*/}
                            </div>
                            <div style={{width: 368, margin: '0 auto'}}>
                                {
                                    store.isLog ?
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
                                                        prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                                        type="password"
                                                        placeholder="请输入密码"/>
                                                </FormItem>
                                                <FormItem>
                                                    <Button
                                                        style={{width: 368, height: 40}}
                                                        onClick={store.onLogin}
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
                                                        prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                                        type="password"
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
                                                        onClick={store.onSubmit}
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
                }
            </div>
        )
    }
}

