import Card from '../../../elements/Card'
import classes from './how.module.css'


export const CardItem = props =>{
    return (
        <Card style ={classes.card}>
            <div>
                
            </div>
            <div className ={classes.info_holder}>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className = {classes.btn_holder}>
                <button>{props.btn}</button>
            </div>
        </Card>
    )
}
