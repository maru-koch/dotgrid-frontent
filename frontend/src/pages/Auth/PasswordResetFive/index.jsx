import React from 'react';
import { AuthLayout } from 'layouts';
import { Text, Button } from 'components';

export const PasswordResetFive = () => (
  <AuthLayout>
    <Text size={20}>Reset password</Text>
    <Text size={24}>Hi Yemi,Your password has been successfully reset.</Text>
    <Button stretch btnType="primary" text="Sign in" />
  </AuthLayout>
);
