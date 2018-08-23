import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Icon} from 'antd'
import * as style from './style.pcss'
import {observer} from "mobx-react"
import { RouteList,routes } from '../../../Routes';
import {uiStore} from '../../../UiStore'


@observer
export class SiderBar extends Component<any, any> {

    public MenuClick = e => {
        uiStore.setSelectedKeys(e.key);
    };

    public openMenu = v => {
        uiStore.setOpenKeys(v[v.length - 1]);
    };

    public render() {
        return (
            <div className={style.side}>
                <img style={{position:'absolute'}} src ={require('./resources/logo.png')}/>
                <Menu
                    onClick={this.MenuClick}
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[uiStore.selectedKeys]}
                    onOpenChange={this.openMenu}
                    openKeys={[uiStore.openKeys]}
                >

                    {
                        routes.map((route: RouteList, key) => {
                            return (
                                <Menu.Item key={route.path}>
                                    <Link to={route.path}>
                                        {route.icon ? <Icon type={route.icon}/> : null}
                                        <span className="nav-text">{route.name}</span>
                                    </Link>
                                </Menu.Item>
                            )
                            // if (_.isEmpty(route.leaf)) {
                            //     return (
                            //         <Item key={route.path}>
                            //             <Link to={route.path}>
                            //                 {route.icon ? <Icon type={route.icon}/> : null}
                            //                 <span className="nav-text">{route.name}</span>
                            //             </Link>
                            //         </Item>
                            //     )
                            // } else {
                            //     return (
                            //         <SubMenu
                            //             key={route.path}
                            //             title={<span>
                            //                {route.icon ? <Icon type={route.icon}/> : null}
                            //                 <span className="nav-text">{route.name}</span></span>}>
                            //             {route.leaf ? route.leaf.map((routeItem: RouteList) => {
                            //                 return <Item key={routeItem.path}><Link
                            //                     to={routeItem.path}>{routeItem.name}</Link></Item>
                            //             }) : null
                            //             }
                            //         </SubMenu>
                            //     )
                            // }
                        })
                    }
                </Menu>
            </div>
        )
    }
}
