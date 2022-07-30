import React, {useState} from 'react';
import { Text, Input, Button, Loader, SectionImage } from '../../elements';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_ACTIONS } from '../../../store/reducer/auth/reducerSlice';
import { validate } from './validation'
import logo from '../../../assets/images/dotgrid_logo.png'
import './forgotPassword.css';


// ../store/reducer/auth/authSlice'
const initialValues = {
  'email':'',
  'password':''
}
export const ForgotPassword = () => {

  const [formData, setFormData] = useState(initialValues)
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const { loading } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const { logInUser } = AUTH_ACTIONS;

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
            <div className="signin-wrapper-button">
                <Button type="submit" stretch text="Reset Password" onClick={onSubmitHandler} />
            </div>
             <div className="signin-wrapper-remember-me">
                <Text.Divider text="login" navigate ={()=>navigate('/signin')}/>
            </div>
        </form>
        </div>
    </main>
  );
};
