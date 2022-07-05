import React, {useState} from 'react';
import { Text, Input, Button, Loader } from '../../elements';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_ACTIONS } from '../../../store/reducer/auth/reducerSlice';
import { validate } from './validation'
import './style.css';
import { toast } from 'react-toastify';

// ../store/reducer/auth/authSlice'
const initialValues = {
  'email':'',
  'password':''
}
export const SignIn = () => {

  const [formData, setFormData] = useState(initialValues)
  const [error, setError] = useState({})

  const { loading, isAuthorized: isAuth } = useSelector((state) => state.auth);
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
        }else{
          alert('logged')
          const validated_data = new FormData();
          validated_data.append('email', formData.email);
          validated_data.append('email', formData.password);
          dispatch(()=>logInUser(formData));
        }
    }


  return (
    <>
      <Loader open={loading} />
      <form style={{ position: 'relative' }} onSubmit={onSubmitHandler}>
        <div className="signin-wrapper-signin-title">
          <Text.Heading text="Sign In" size={24} weight={500} level={1} />
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
        <div className="signin-wrapper-remember-me">
          <Text.RememberMe />
        </div>
        <div className="signin-wrapper-button">
          <Button type="submit" stretch text="Sign In" onClick={onSubmitHandler} />
        </div>
        <div className="signin-wrapper-divider">
          <Text.Divider text="OR" />
        </div>
        <div className="signin-wrapper-google-button">
          <Button.GoogleBtn text="Continue with Google" />
        </div>
        <div className="signin-main-footer-text">
          <Text.Heading text="Don't have an account?" color="grey" size={14} weight={500} level={4} />
          <Link to="/signup">
            <Text.Heading text="Sign Up" color="green" size={14} weight={500} level={4} />
          </Link>
        </div>
      </form>
    </>
  );
};
