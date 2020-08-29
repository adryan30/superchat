import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
  Container,
  LoginCard,
  UsernameInput,
  LoginButton,
  LogoImg,
} from './styles';
import logo from '../../../assets/logo_transparent.png';
import useLocalStorage from '../../../utils/hooks/useLocalStorage.hook';

const Login: React.FC = () => {
  const history = useHistory();
  const { dispatch: setUsername } = useLocalStorage('username');

  return (
    <Container>
      <LoginCard>
        <LogoImg src={logo} />
        <UsernameInput onChange={(e) => setUsername(e.target.value)} />
        <LoginButton onClick={() => history.push('/chat/')}>Entrar</LoginButton>
      </LoginCard>
    </Container>
  );
};

export default Login;
