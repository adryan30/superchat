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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') history.push('/chat');
  };

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  return (
    <Container>
      <LoginCard>
        <LogoImg src={logo} />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <UsernameInput
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <LoginButton onClick={() => history.push('/chat')}>Entrar</LoginButton>
=======
        <UsernameInput onChange={(e) => setUsername(e.target.value)} />
        <LoginButton onClick={() => history.push('/chat/')}>Entrar</LoginButton>
>>>>>>> Stashed changes
=======
        <UsernameInput onChange={(e) => setUsername(e.target.value)} />
        <LoginButton onClick={() => history.push('/chat/')}>Entrar</LoginButton>
>>>>>>> Stashed changes
      </LoginCard>
    </Container>
  );
};

export default Login;
