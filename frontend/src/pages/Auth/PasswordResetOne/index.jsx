import React from 'react';
import { AuthLayout } from 'layouts';
import { Button, Text } from 'components';

export const PasswordResetOne = () => (
  <AuthLayout>
    <div className="wrapper--email">
      <div className="wrapper--label--email">
        <Text text="Enter your Email Address" />
      </div>
      <div className="wrapper--input--email">
        <div>pass</div>
      </div>
    </div>
    <Button stretch btnType="primary" text="Send Recovery Link" />
  </AuthLayout>
);
