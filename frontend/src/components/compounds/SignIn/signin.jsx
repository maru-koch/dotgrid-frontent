import React, {useState} from 'react';
import { Text, Input, Button, Loader, SectionImage } from '../../elements';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_ACTIONS } from '../../../store/reducer/auth/reducerSlice';
import { validate } from './validation'
import logo from '../../../assets/images/dotgrid_logo.png'
import './signin.css';


// ../store/reducer/auth/authSlice'
const initialValues = {
  'email':'',
  'password':''
}
export const SignIn = () => {

  const [formData, setFormData] = useState(initialValues)
  const [error, setError] = useState({})

  const { loading } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const { logInUser } = AUTH_ACTIONS;

  const navigate = useNavigate()

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
      validated_data.append('email', formData.password);
      dispatch(logInUser(formData));
     
    }


  return (
    <main className ="signin__container">
      {/* <Loader open={loading}/> */}
        <div className ="signin__wrapper">
          <form style={{ position: 'relative' }} onSubmit={onSubmitHandler}>
            <div className="signin-wrapper-signin-title">
                <SectionImage image={logo} imageStyle={{width:'100%', height:'auto', cursor: 'pointer'}}/>
            </div>
            <div className="signin-wrapper-email">
                <Text.Heading text="Email Address" size={16} weight={450} level={3} />
                <Input.FullRound name="email" type="email" placeholder="" onChange={onChangeHandler} />
                {error?<p className="error">{error.email}</p>:''}
            </div>
            <div className="signin-wrapper-password">
                <Text.Heading text="Password" size={16} weight={450} level={3} />
                <Input.FullRound name="password" type="password" placeholder="" onChange={onChangeHandler} />
                {error?<p className="error" >{error.password}</p>:''}
            </div>
            <div className="signin-wrapper-remember-me" >
                <Text.RememberMe navigate ={()=>navigate('/forgot-password')}/>
            </div>
            <div className="signin-wrapper-button">
                <Button type="submit" stretch text="Sign In" onClick={onSubmitHandler}>
                  {<Loader hasText={false} height = "50px" width="50px"/>}
                </Button>
            </div>
        </form>
        </div>
    </main>
  );
};
