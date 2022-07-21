import {Card} from '../../../elements/Card'
import classes from './cardItem.module.css'
import { useNavigate } from 'react-router-dom'

export const CardItem = ({icon, desc }) =>{

    const navigate = useNavigate()
    
    return (
        <Card style ={classes.card} onClick={()=>navigate(url)}>
            <div>
                <div>
                     <i className={icon}></i>
                </div>
            </div>
            <div className ={classes.info_holder}>
                <p>{desc}</p>
            </div>
        </Card>
    )
}
