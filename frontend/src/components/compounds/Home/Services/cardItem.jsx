import {Card} from '../../../elements/Card'
import classes from './cardItem.module.css'
import { useNavigate } from 'react-router-dom'

export const CardItem = ({icon, title, desc, btn, url}) =>{

    const navigate = useNavigate()
    
    return (
        <Card style ={classes.card} onClick={()=>navigate(url)}>
            <div>
                <i className={icon}></i>
            </div>
            <div className ={classes.info_holder}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className = {classes.btn_holder}>
                <button>{btn}</button>
            </div>
        </Card>
    )
}
