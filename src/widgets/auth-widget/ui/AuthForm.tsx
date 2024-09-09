import { useState } from 'react';
import { FormContainer, FormTabs, FormTab } from './styled';
import { SignUpForm } from '../../../features/sign-up';

const AuthForm: React.FC = () => {
  const [tabValue, setTabValue] = useState<'signUp' | 'login'>('signUp');

  const componentToRender = {
    signUp: <SignUpForm />,
    login: <p>login</p>,
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: 'signUp' | 'login') => {
    setTabValue(newValue);
  };

  return (
    <FormContainer>
      <FormTabs value={tabValue} onChange={handleTabChange} centered>
        <FormTab value={'signUp'} label="Sign Up" />
        <FormTab value={'login'} label="Login" />
      </FormTabs>
      {componentToRender[tabValue]}
    </FormContainer>
  );
};

export default AuthForm;
