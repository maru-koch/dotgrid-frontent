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
        <div className="h-45 grid grid-rows-3 rounded-md border-2 md:w-full m-10 sm:w-full" onClick={()=>navigate(url)}>
            <div class="flex justify-center items-center">
                <i className="text-4xl text-primaryColor font-bold" class={icon}></i>
            </div>
            <div className ={classes.info_holder}>
                <h3 className='text-2xl font-poppins'>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className = {classes.btn_holder}>
                <button onClick={()=>handleDispatch()}>{btn}</button>
            </div>
        </div>
    )
}
