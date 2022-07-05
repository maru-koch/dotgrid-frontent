
import classes from './headerCartButton.module.css'

import { useSelector } from 'react-redux'



// used in Nav component
const HeaderCartButton = props =>{

    // accessing the amount specified in the state 
    const { amount } = useSelector((state) => state.cart)
    
    return <button class = {classes.btn} onClick = {props.showModal}>
        <span class ={classes.icon}>
            <i class ="fa fa-shopping-cart" aria-hidden="true"></i>
        </span>
        <span ><p class = {classes.cart}>Cart</p></span>
        <span ><p class = {classes.countItems}>{amount}</p></span>
    </button>
}

export default HeaderCartButton;