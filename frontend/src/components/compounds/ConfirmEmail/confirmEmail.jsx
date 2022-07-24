import React from 'react';
import { ReactComponent as Loading } from './loading.svg';
import classes from './confirmEmail.module.css'
import  {useSelector } from 'react-redux'


export const ConfirmEmail = () => {

  // ONLY DISPLAYS WHEN USER IS SUCCESSFULLY REGISTERED
  // displays the confirmation page
  // receive the encoded email from the url through useParams and passes it into the api endpoint
  
  const { registered } = useSelector(state => state.auth)
  
  return (
    <div className ={classes.confirm__container}>
      { registered &&
        <div className ={classes.confirm__wrapper}>
          <p>
              We’ve sent an email to you. Kindly click the link in the email to activate your account.
          </p>
          <Loading />
      </div>
      }
  </div>
  )
};

