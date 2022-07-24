import React from 'react';
import { Text } from '../../elements';
import { ReactComponent as Loading } from './loading.svg';
import classes from './confirmEmail.module.css'


export const ConfirmEmail = () => {

  // displays the confirmation page
  // receive the encoded email from the url through useParams and passes it into the api endpoint

  return (
    <div className ={classes.confirm__container}>
      <div className ={classes.confirm__wrapper}>
          <p>
              We’ve sent an email to you. Kindly click the link in the email to activate your account.
          </p>
          <Loading />
      </div>
  </div>
  )
};

