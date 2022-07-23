import React from 'react';
import { Text } from 'components';
import { ReactComponent as Loading } from './loading.svg';
import classes from './confirm_email.module.css'

export const ConfirmEmail = () => (
  <div className ={classes.confirm__container}>
    <div className ={classes.confirm__wrapper}>
        <Text size={24}>
          Hi there, We’ve sent an email to you. Kindly click the link in the email to activate your account.
        </Text>
        <Loading />
    </div>
  </div>
);
