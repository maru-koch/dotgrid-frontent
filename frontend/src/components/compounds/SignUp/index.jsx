import React, { useState } from 'react';
import { Text, Input, Button } from '../../elements';
import { Link } from 'react-router-dom';
import './style.css';


const initialState={
  email:'',
  first_name: '',
  last_name: '',
  password: '',
}
export const SignUp = () => {
  const [formData, setFormData] = useState(initialState)
  const onChangeHandler=e=>{
    setFormData(formData)
  }
   return (
        <div>
          <div className="signup-wrapper-signup-title">
            <Text.Heading text="Sign Up" size={24} weight={500} level={1} />
          </div>
          <div className="signup-wrapper-name">
            <div className="signup-col-firstname">
              <Text.Heading text="First Name" size={16} weight={450} level={3} />
              <Input.HalfLeftRound name ="first_name" type="text" placeholder="" />
            </div>
            <div className="signup-col-lastname">
              <Text.Heading text="Last Name" size={16} weight={450} level={3} />
              <Input.HalfRightRound name ="last_name" type="text" placeholder="" />
            </div>
          </div>
          <div className="signup-wrapper-email">
            <Text.Heading text="Email Address" size={16} weight={450} level={3} />
            <Input.FullRound name ="email" type="email" placeholder="" />
          </div>

          <div className="signup-wrapper-password">
            <Text.Heading text="Set a Password" size={16} weight={450} level={3} />
            <Input.FullRound name ="password" type="password" placeholder="" />
          </div>
          <div className="signup-wrapper-button">
            <Button.MainGreen text="Sign Up" />
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
        </div>
   )
}
 

