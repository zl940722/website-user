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
                        store.teamList.map(item => (
                            <div className={style.TeamDivItem}>
                                <div className={style.TeamDivItemIcon}>
                                    {
                                        item.id === 1 ? <i className={style.Icon1}>{}</i> :
                                            item.id === 2 ? <i className={style.Icon2}>{}</i> :
                                                item.id === 3 ? <i className={style.Icon3}>{}</i> :
                                                    item.id === 4 ? <i className={style.Icon4}>{}</i> : null

                                    }
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
