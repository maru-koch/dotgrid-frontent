import classes from './contactForm.module.css'
import { SubscribeForm } from './subscriptionForm'
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

const CheckBoxOptions=()=>{
    return (
        <>
            <p>I want to Inquire about:</p>
            <div className={classes.form__checkbox__wrapper}>
                <CheckBox heading="Solar Installation"/>
                <CheckBox heading="Energy Loan"/>
                <CheckBox heading="Smart Meter"/>
                <CheckBox heading="Energy Monitoring and Analytics"/>
            </div>
        </>
    )
}

export const ContactForm =()=>{
    return (
    <SubscribeForm title="Get In Touch" btnText="Send">
        <CheckBoxOptions/>
    </SubscribeForm>
    )
}

