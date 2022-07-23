import React from 'react';
import { Text } from '../../elements';
import { ReactComponent as Loading } from './loading.svg';
import { Link } from 'react-router-dom'
import classes from './verifyEmail.modules.css'



export const VerifyEmail = () => {

  // displays the confirmation page
  // receive the encoded email from the url through useParams and passes it into the api endpoint

  return (
    <div className ={classes.confirm__container}>
      <div className ={classes.confirm__wrapper}>
          <Text size={24}>
              Your Account is successfully activate. Continue to log in
          </Text>
      </div>
  </div>
  )
};

