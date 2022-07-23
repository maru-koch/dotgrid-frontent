import React from 'react';
import { Text } from '../../elements';
import { ReactComponent as Loading } from './loading.svg';
import classes from './verifyEmail.modules.css'



export const VerifyEmail = () => {

  // displays the confirmation page
  // receive the encoded email from the url through useParams and passes it into the api endpoint

  return (
    <div className ={classes.confirm__container}>
      <div className ={classes.confirm__wrapper}>
          <Text size={24}>
              Hi there, We’ve sent an email to you. Kindly click the link in the email to activate your account.
          </Text>
          <Loading />
      </div>
  </div>
  )
};

