import React from 'react';
import { useParam } from 'react-router-dom'
import { Text } from '../../elements';
import { ReactComponent as Loading } from './loading.svg';
import classes from './confirmEmail.modules.css'

 let encoded_email = useParam()

export const ConfirmEmail = () => (
  // when the email verification link is clicked it goes to port 3000 and not port 8000
  // receive the encoded email from the browser and passes it to the backend
 

  <div className ={classes.confirm__container}>
    <div className ={classes.confirm__wrapper}>
        <Text size={24}>
          Hi there, We’ve sent an email to you. Kindly click the link in the email to activate your account.
        </Text>
        <Loading />
    </div>
  </div>
);
