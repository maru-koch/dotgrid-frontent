import React from 'react';
import { Button, Text } from 'components';
import './style.css';

export const ResetOne = () => (
  <div>
    <div className="wrapper--email">
      <div className="wrapper--label--email">
        <Text text="Enter your Email Address" />
      </div>
      <div className="wrapper--input--email">
        <div>pass</div>
      </div>
    </div>
    <Button stretch btnType="primary" text="Send Recovery Link" />
  </div>
);
