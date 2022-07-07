import React, { useState } from 'react';
import { Text, Input, Button } from '../../elements';
import { Link } from 'react-router-dom';
import { validate } from './validation'
import { useDispatch} from 'react-redux'
import { toast} from 'react-toastify';
import { AUTH_ACTIONS } from '../../../store/reducer/auth/reducerSlice';
import './style.css';


const initialState={
  email:'',
  first_name: '',
  last_name: '',
  password: '',
}
export const SignUp = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState({})
  const { signUpUser } = AUTH_ACTIONS

  const onChangeHandler=e=>{
    setFormData({...formData, [e.target.name]:e.target.value})

  }

  const onSubmitHandler=(e)=>{
      e.preventDefault();
      const errors = validate(formData)
      if (errors) {
        setError(errors)
      }
         dispatch(signUpUser(formData))
         toast.success('Successfully logged in')
      

      
      
  }
   return (
        <form onSubmit={onSubmitHandler}>
          <div className="signup-wrapper-signup-title">
            <Text.Heading text="Sign Up" size={24} weight={500} level={1} />
          </div>
          <div className="signup-wrapper-name">
            <div className="signup-col-firstname">
              <Text.Heading text="First Name" size={16} weight={450} level={3} />
              <Input.HalfLeftRound 
                  name ="first_name" 
                  type="text" 
                  onChange={onChangeHandler}/>
                  {error?<p className="error">{error.first_name}</p>:''}
            </div>
            <div className="signup-col-lastname">
              <Text.Heading text="Last Name" size={16} weight={450} level={3} />
              <Input.HalfRightRound 
                  name ="last_name" 
                  type="text" 
                  onChange={onChangeHandler}/>
                  {error?<p className="error">{error.last_name}</p>:''}
            </div>
          </div>
          <div className="signup-wrapper-email">
            <Text.Heading text="Email Address" size={16} weight={450} level={3} />
            <Input.FullRound 
                  name ="email" 
                  type="email" 
                  onChange={onChangeHandler}/>
                  {error?<p className="error">{error.email}</p>:''}
          </div>

          <div className="signup-wrapper-password">
            <Text.Heading text="Set a Password" size={16} weight={450} level={3} />
            <Input.FullRound 
                  name ="password" 
                  type="password" 
                  placeholder="" 
                  onChange={onChangeHandler}/>
                  {error?<p className="error">{error.password}</p>:''}
          </div>
          <div className="signup-wrapper-button">
            <Button.MainGreen 
                  text="Sign Up" 
                  onClick={onSubmitHandler}/>
          </div>
          <div className="signup-wrapper-divider">
            <Text.Divider text="OR" />
          </div>
          <div className="signup-wrapper-google-button">
            <Button.GoogleBtn text="Continue with Google" />
          </div>
          <div className="signup-main-footer-text">
            <Text.Heading text="Already have an account?" color="grey" size={14} weight={500} level={4} />
            <Link to="/signin">
              <Text.Heading text="Sign In" color="green" size={14} weight={500} level={4} />
            </Link>
          </div>
        </form>
   )
}
 

