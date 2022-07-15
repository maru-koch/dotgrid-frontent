
import classes from './contactImage.module.css';

const ContactImage =()=>{
    return (
    <div class ={classes.container}>
        <div class ={classes.imgHolder}>
            <p class = {classes.backdrop}></p>
            <img src = {''} alt = "chef's pic"/>
        </div>
    </div>
    )
}

export default ContactImage