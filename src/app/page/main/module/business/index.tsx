import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as style from "./style.pcss";
@observer
export default class Contact extends Component<any, any> {

    public render() {
        return (
            <div>
                <CommonBanner/>
                <Text/>
            </div>
        )
    }
}
@observer
export class CommonBanner extends Component<any, any> {

    public render() {
        return(
            <div style={{width: "100%"}}>
                <img src={require('./images/banner.jpg')} style={{width:"100%"}}/>
            </div>
        )
    }

}
@observer
export class Text extends Component<any, any> {
    public render() {
        return(
            <div className={style.contactmid}>
                <div >
                    <h2>hr Contact us</h2>
                    <hr/>
                </div>
                <div>
                    <span>ssss</span>
                    <span>028-67174822</span>
                    <span>cantact@</span>
                    <span>123 Smith Drive,Baltimore,MD 21212</span>
                </div>
            </div>
        )
    }
}

