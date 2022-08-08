import classes from './cardItem.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LEARNMORE_ACTIONS } from '../../../../store/reducer/learnMoreSlice';
import { learnMoreData } from '../../../../constants/learnMoreData'

export const CardItem = ({icon, title, desc, btn, url, name, dispatchLearnMore}) =>{

    const navigate = useNavigate()
    const { updateLearnMore} = LEARNMORE_ACTIONS
    const dispatch = useDispatch();

    
    const handleDispatch=()=>{
        
        // dispatches an action that sends the learn more detail to store
        const payload = learnMoreData[name]
        dispatch(updateLearnMore(payload))
        navigate('/learn-more')
    }
    
    return (
        <div className={classes.card} onClick={()=>navigate(url)}>
            <div>
                <i className={icon}></i>
            </div>
            <div className ={classes.info_holder}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className = {classes.btn_holder}>
                <button onClick={()=>handleDispatch()}>{btn}</button>
            </div>
        </div>
    )
}
