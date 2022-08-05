
import PropTypes from 'prop-types';
import classes from './listItem.module.css'

export const ListItem = ({icon, item}) =>{
    return (
        <li className ={classes.listItem__container}>
            <i className={icon}></i>
            <p>{item}</p>
        </li>
    )
}


ListItem.propTypes = {
    icon: PropTypes.string,
    items: PropTypes.string
}