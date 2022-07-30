import {Card} from '../../../elements/Card'
import classes from './cardItem.module.css'

export const CardItem = ({icon, desc }) =>{

    return (
        <div className ={classes.card}>
            <div>
                <div className ={classes.circle}>
                    <i className={icon}></i>
                    
                </div>
            </div>
            <div className ={classes.info_holder}>
                <p>{desc}</p>
            </div>
        </div>
    )
}
