
import classes from './contactInfo.module.css';

export const ContactInfo =()=>{
    return (
    <div class ={classes.contact__container}>
        <div class ={classes.contact__wrapper}>
            <div>
                <i className = "fa fa-location"></i>
                <p>Location</p>
            </div>
             <div>
                <i className = "fa fa-phone"></i>
                <p>+2349012693884</p>
            </div>
        </div>
    </div>
    )
}

