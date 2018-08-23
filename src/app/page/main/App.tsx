import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react';
import LazyLoad from './LazyLoad';
import {RouteList, routes} from './Routes';
import {SiderBar} from "./module/layout/sider";
import {uiStore} from "./UiStore";
import {Layout} from 'antd';

const {Header, Content, Footer} = Layout;

const redirectUrl = process.env.REDIRECT_URL;


@observer
export default class App extends Component<any, any> {

    constructor() {
        super();
        this.CreateRoute(routes);

        if (sessionStorage.getItem('LoginType')) {
            if (sessionStorage.getItem('LoginType') === 'LoginIn') {
                console.log();
            } else {
                window.location.href = redirectUrl + 'login.html#/';
                sessionStorage.clear();
            }
        } else {
            window.location.href = redirectUrl + 'login.html#/';
            sessionStorage.clear();
        }

    }

    // 遍历生成所有路由和面包屑
    public CreateRoute = (routes: RouteList[]) => {
        for (const route of routes) {
            uiStore.BreadList.push(route);
            if (route.leaf) {
                const leafList = route.leaf;
                this.CreateRoute(leafList);
            }
        }
    };

    public render() {
        return (
            <div>
                {
                    sessionStorage.getItem('LoginType') === 'LoginIn' ?
                        <Router>
                            <Switch>
                                <Layout>
                                    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                                        {/*<div className="logo">111</div>*/}
                                        <SiderBar/>
                                    </Header>
                                    <Content style={{padding: '0 50px', marginTop: 64}}>
                                        <Route
                                            exact={true}
                                            path='/user'
                                            render={props => <LazyLoad {...props}
                                                                       component={System.import('./module/user')}/>}
                                        />
                                        <Route
                                            exact={true}
                                            path='/business'
                                            render={props => <LazyLoad {...props}
                                                                       component={System.import('./module/business')}/>}
                                        />
                                        <Route
                                            exact={true}
                                            path='/about'
                                            render={props => <LazyLoad {...props}
                                                                       component={System.import('./module/about')}/>}
                                        />
                                        <Route
                                            exact={true}
                                            path='/contact'
                                            render={props => <LazyLoad {...props}
                                                                       component={System.import('./module/contact')}/>}
                                        />
                                        <Route
                                            exact={true}
                                            path='/home'
                                            render={props => <LazyLoad {...props}
                                                                       component={System.import('./module/home')}/>}
                                        />
                                    </Content>
                                    <Footer style={{textAlign: 'center'}}>
                                        Ant Design ©2018 Created by Ant UED
                                    </Footer>
                                </Layout>
                            </Switch>
                        </Router> :
                        {}
                }

            </div>
        );
    }
}

