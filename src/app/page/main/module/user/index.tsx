import React, {Component} from 'react'
import {observer} from 'mobx-react'
// import {Carousel} from 'antd';
// import * as style from "./style.pcss";
import {Login} from './login'

@observer
export default class User extends Component<any, any> {
    constructor(){
        super()
    }
    public render() {
        return (
            <div>
               <Login/>
            </div>
        )
    }
}

