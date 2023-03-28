import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import InputCustom from '../../components/Input';

import * as Styled from './styles';

const Login = () => {
  const TesteToast = () => {
    Toast('WARNING', 'dshfbdshfbdshfbsfbshfbsdfhsbhfshb');
  };
  const navigate = useNavigate();
  return (
    <Styled.ContainerMaster>
      <Styled.Title>Login</Styled.Title>
      <InputCustom mask="99/99/9999" />
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