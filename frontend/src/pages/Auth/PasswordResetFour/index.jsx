import React from 'react';
import { AuthLayout } from 'layouts';
import { Text, Button } from 'components';

export const PasswordResetFour = () => (
  <AuthLayout>
    <Text size={20}>Reset password</Text>
    <Text size={24}>
      We’ve sent an email to you.
      <br /> Kindly activate your account from the link in the email sent.
    </Text>
    <Button stretch btnType="primary" text="Resend Recovery Link" />
  </AuthLayout>
);
