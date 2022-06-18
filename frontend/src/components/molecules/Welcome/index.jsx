import { Button, Text } from '../../elements';

import './style.css';

export const Welcome = () => (
  <div className="intro_body">
    <Text size={16} weight={450}>
      <span style={{padding:"20px"}}>Welcome Admin! </span>
      We’re excited to have you here.
    </Text>
    <Button round btnType="secondary">
      <Text size={14}> Request A Device </Text>
    </Button>
  </div>
);
