
import classes from './headerCartButton.module.css'
import {Link} from 'react-router-dom'

// used in Nav component
// Navigat
const HeaderOrderButton = props =>{
    return (
    <Link to ="/menu">
        <button class = {classes.btn} onClick = {props.showModal}>
            <i class ="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
    </Link>)
}

export default HeaderOrderButton;