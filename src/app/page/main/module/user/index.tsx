import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {Carousel} from 'antd';
import * as style from "./style.pcss";
import {Login} from '../login'

@observer
export default class User extends Component<any, any> {
    public render() {
        return (
            <div>
               <Login/>
            </div>
        )
    }
}

@observer
export class Banner extends Component<any, any> {
    public render() {
        return (

            <div style={{width: '100%'}}>
                <Carousel className={style.banner} autoplay={false}>
                    <div>
                        <img src={require('./images/bg_header.jpg')}/>
                    </div>
                    <div>
                        <img src={require('./images/bg_header.jpg')}/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

@observer
export class Testimonial extends Component<any, any> {
    public render() {
        return (
            <div className={style.testimonial}>
                <h3>Client Testimonial</h3>
                <Carousel className={style.testimonialCar} autoplay={true}>
                    <div>
                        <img src={require('./images/bg_header.jpg')}/>
                    </div>
                    <div>
                        <img src={require('./images/pro2.jpg')}/>
                    </div>
                </Carousel>
            </div>
        )
    }
}


