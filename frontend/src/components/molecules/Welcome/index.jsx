import { Button, Text } from 'components';

import './style.css';

export const Welcome = () => (
  <div className="intro_body">
    <Text size={16} weight={450}>
      <span>Welcome Ade! </span>
      We’re excited to have you contribute to your environmental health today.
    </Text>
    <Button round btnType="primary">
      <Text size={14}> Request A PickUp </Text>
    </Button>
  </div>
);
