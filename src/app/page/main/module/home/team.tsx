import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as style from "./style.pcss";
import {store} from './store'

@observer
export default class Team extends Component<any, any> {
    public render() {
        return (
            <div className={style.Team}>
                <h3>团队优势</h3>
                <div className={style.TeamDiv}>
                    {
                        store.teamList.map(item =>(
                            <div className={style.TeamDivItem}>
                                <img  src={item.img}/>
                                <p>{item.title}</p>
                                <p>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
