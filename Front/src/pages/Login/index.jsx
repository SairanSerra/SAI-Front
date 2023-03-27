import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Toast from '../../components/Toast';

import * as Styled from './styles';

const Login = () => {
  const TesteToast = () => {
    Toast('WARNING', 'teste');
  };
  const navigate = useNavigate();
  return (
    <Styled.ContainerMaster>
      <Styled.Title>Login</Styled.Title>
      <Button
        title="Cadastre - se"
        onClick={() => {
          TesteToast();
          navigate('/register');
        }}
      />
    </Styled.ContainerMaster>
  );
};

export default Login;