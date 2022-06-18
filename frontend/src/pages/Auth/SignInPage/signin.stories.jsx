import { MemoryRouter } from 'react-router-dom';
import { SignInPage } from 'pages/Auth/SignInPage';

export default {
  title: 'Sign Up',
  component: SignInPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Login = () => <SignInPage />;
