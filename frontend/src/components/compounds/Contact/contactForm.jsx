import classes from './contactForm.module.css'
const ContactForm =()=>{
    return (
    <div class ={classes.formContainer}>
        <h4>Get in Touch</h4>
        <input type = "text" placeholder = "Name"/>
        <input type = "email" placeholder = "Email Address"/>
        <textarea type = "text" placeholder = "Your Message to Us"></textarea>
        <div class = {classes.btnHolder}>
            <button>Send</button>
        </div>
    </div>
    )
}

export default ContactForm