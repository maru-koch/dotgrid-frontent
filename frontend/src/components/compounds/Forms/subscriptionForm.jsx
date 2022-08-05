import classes from './contactForm.module.css'
import PropTypes from 'prop-types';

export const SubscribeForm =({children, title, btnText, bg})=>{

    return (
        <div style={bg}>
            <div className ={classes.formContainer}>
            <h4>{title}</h4>
            <form>
                <input type = "text" placeholder = "Name"/>
                <input type = "email" placeholder = "Email Address"/>
                <input type = "phone" placeholder = "Phone"/>
                <textarea type = "text" placeholder = "Your Message to Us"></textarea>
                <div className={classes.form__checkbox__container}>
                    {children}
                </div>
                <div class = {classes.btnHolder}>
                    <button>{btnText}</button>
                </div>
            </form>
            </div>
        </div>
    )
}


SubscribeForm.propTypes = {
    title: PropTypes.string,
    btnText: PropTypes.string,
    children:PropTypes.node,
}