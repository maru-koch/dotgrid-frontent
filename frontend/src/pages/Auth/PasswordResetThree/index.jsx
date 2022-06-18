import React from 'react';
import { AuthLayout } from 'layouts';
import { Text, Button } from 'components';

export const PasswordResetThree = () => (
  <AuthLayout>
    <Text size={20}>Reset password</Text>
    <Text size={24}>
      Hi Yemi,
      <br /> A request was made to reset your password. If you made this request, please continue.
    </Text>
    <Button stretch btnType="primary" text="Yes, continue" />
  </AuthLayout>
);
