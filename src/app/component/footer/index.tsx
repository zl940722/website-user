import * as React from 'react';
import {observer} from 'mobx-react';
import * as styles from './style.pcss';

@observer
export class Footer extends React.Component<any, any> {
    public render() {

        return (
            <div className={styles.footer}>
                <div className={styles.footerDiv}>
                    <div className={styles.footerDivLeft}>
                        <h3>关于明德</h3>
                        <p>明德商务咨询有限公司成立于2017年12月27日致力为商务信息咨询，企业管理咨询，教育咨询，营销策划。</p>
                    </div>
                    <div className={styles.footerDivRight}>
                        <h3>联系我们</h3>
                        <p>您可以通过以下途径和我们取得联系</p>
                        <p>028-67174822</p>
                        <p>contact@</p>
                        <p> 123 Smith Drive, Baltimore, MD 21212</p>
                    </div>
                </div>

            </div>
        )
    }
}
