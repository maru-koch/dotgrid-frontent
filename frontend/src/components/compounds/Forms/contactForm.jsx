import classes from './contactForm.module.css'
const CheckBox =({heading})=>{
    return(
        <div className={classes.checkbox__container}>
            <div className={classes.checkbox__wrapper}>
                <input type="checkbox" default/>
                <p>{heading}</p>
            </div>
        </div>
    )
}

export const ContactForm =()=>{
    return (
    <div class ={classes.formContainer}>
        <h4>Get in Touch</h4>
        <form>
            <input type = "text" placeholder = "Name"/>
            <input type = "email" placeholder = "Email Address"/>
            <textarea type = "text" placeholder = "Your Message to Us"></textarea>
            <div className={classes.form__checkbox__container}>
                <p>I want to Inquire about:</p>
                <div className={classes.form__checkbox__wrapper}>
                    <CheckBox heading="Solar Installation"/>
                    <CheckBox heading="Energy Loan"/>
                    <CheckBox heading="Smart Meter"/>
                    <CheckBox heading="Energy Monitoring and Analytics"/>
                </div>
            </div>
             <div class = {classes.btnHolder}>
                <button>Send</button>
            </div>
        </form>
       
    </div>
    )
}

