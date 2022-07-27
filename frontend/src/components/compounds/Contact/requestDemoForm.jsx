import classes from './requestDemoForm.module.css'
const CheckBox =({heading})=>{
    return(
        <div className={classes.checkbox__container}>
            <div className={classes.checkbox__wrapper}>
                <input type="radio" default/>
                <p>{heading}</p>
            </div>
        </div>
    )
}

const Input =({label, type, placeholder})=>{
    return ( 
        <div className={classes.input__container}>
            <label>{label}</label>
            <input type ={type} placeholder={placeholder}/>
        </div>
    )
}

export const RequestDemoForm =({close})=>{
    return (
    <div class ={classes.formContainer}>
        <h2>Request Demo</h2>
        <p className = {classes.subtitle}>Get started with a free trial</p>
        <form>
            <div className={classes.form__input__container}>
                <Input label ="First Name" type="text" placeholder = "first name"/>
                <Input label ="Last Name" type="text" placeholder = "last name"/>
            </div>
            <div className={classes.form__input__container}>
                <Input label ="email" type="email" placeholder = "email address"/>
                <Input label ="Phone Number" type="text" placeholder = "first name"/>
            </div>
            <div className={classes.form__checkbox__container}>
                <p className={classes.checkbox__title}>What kind of Inverter do you have?*</p>
                <div className={classes.form__checkbox__wrapper}>
                    <CheckBox heading="Sungrow"/>
                    <CheckBox heading="Fronius"/>
                    <CheckBox heading="Goodwe"/>
                    <CheckBox heading="Others"/>
                    <CheckBox heading="I do not have"/>
                </div>
            </div>
            <div className={classes.form__checkbox__container}>
                <p className={classes.checkbox__title}>Do you have smart meter?*</p>
                <div className={classes.form__checkbox__wrapper}>
                    <CheckBox heading="Yes"/>
                    <CheckBox heading="No"/>
                    <CheckBox heading="I do not have"/>
                </div>
            </div>
             <div class = {classes.btnHolder}>
                <button onClick={()=>close()}>Request Demon</button>
            </div>
        </form>
       
    </div>
    )
}

