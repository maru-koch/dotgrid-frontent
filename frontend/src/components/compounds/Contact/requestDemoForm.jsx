import classes from './requestDemoForm.module.css'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { validate } from './validation';

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

const Input =({label, type, placeholder, name, onChangeHandler})=>{
    return ( 
        <div className={classes.input__container}>
            <label>{label}</label>
            <input 
                type ={type} 
                placeholder={placeholder} 
                name={name} 
                onChange={()=>onChangeHandler()}/>
        </div>
    )
}


// Initial data
const initialValues = {
  'email':'',
  'firstName':'',
  'lastName':'',
  'phoneNumber':'',
}


export const RequestDemoForm =({close})=>{
    const [formData, setFormData] = useState(initialValues)
    const [error, setError] = useState({})
    const dispatch = useDispatch();
    // const { logInUser } = AUTH_ACTIONS;

    const onChangeHandler=(e)=>{
      setFormData({...formData, [e.target.name]:e.target.value })
      
    }

    const onSubmitHandler = (e) => {
      e.preventDefault();
      const errors = validate(formData)

      // check if there is an error, if true, trigger a toast
      // else dispatch logInUser action
      
      if (errors){
            setError(errors)
        }
        
      const validated_data = new FormData();
      validated_data.append('email', formData.email);
      validated_data.append('firstName', formData.firstName);
      validated_data.append('lastName', formData.lastNameName);
      validated_data.append('phoneNumber', formData.phoneNumber);
    //   dispatch(logInUser(formData));
     
    }
    return (
    <div class ={classes.formContainer}>
        <div class ={classes.closeFormPanel}>
            <div class ={classes.closeFormPanel__icon}>
                <i className = "fa fa-times" onClick={()=>close()}></i>
            </div>
        </div>
        <h2>Request Demo</h2>
        <p className = {classes.subtitle}>Get started with a free trial</p>
        <form>
            <div className={classes.form__input__container}>
                <Input label ="First Name" type="text" placeholder = "first name" name="firstName" onChangeHandler={onChangeHandler}/>
                <Input label ="Last Name" type="text" placeholder = "last name" name="lastName" onChangeHandler={onChangeHandler}/>
            </div>
            <div className={classes.form__input__container}>
                <Input label ="email" type="email" placeholder = "email address" name="email" onChangeHandler={onChangeHandler}/>
                <Input label ="Phone Number" type="text" placeholder = "first name" name="phoneNumber" onChangeHandler={onChangeHandler}/>
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

