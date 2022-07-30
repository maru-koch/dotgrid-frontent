
import classes from './contactInfo.module.css';

export const ContactInfo =()=>{
    return (
    <div className ={classes.contact__container}>
        <div className ={classes.contact__wrapper}>
            <div className ={classes.contact__box}>
                <i className = "fa fa-map-marker"></i>
                <p>No. 7 Asajon way, Sango-tedo, Lagos</p>
            </div>
             <div className ={classes.contact__box}>
                <i className = "fa fa-envelope"></i>
                <p>Info@dotsolar.com</p>
            </div>
             <div className ={classes.contact__box}>
                <i className = "fa fa-phone"></i>
                <p>+2349012693884</p>
            </div>
        </div>
    </div>
    )
}

