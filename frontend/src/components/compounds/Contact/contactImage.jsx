
import classes from './contactImage.module.css';

const ContactImage =()=>{
    return (
    <div class ={classes.contact__container}>
        <div class ={classes.contact__wrapper}>
            <div>
                <i className = "fa fa-location"></i>
                <img src = {''} alt = "chef's pic"/>
            </div>
             <div>
                <i className = "fa fa-phone"></i>
                <img src = {''} alt = "chef's pic"/>
            </div>
        </div>
    </div>
    )
}

export default ContactImage