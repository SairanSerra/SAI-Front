import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import * as Styled from './styles';

const SignUP = () => {
  console.log('SignUP');
  const navigate = useNavigate();
  return (
    <Styled.ContainerMaster>
      <Styled.Title>SignUP</Styled.Title>
      <Button title="Voltar" onClick={() => navigate('/')} />
    </Styled.ContainerMaster>
  );
};

export default SignUP;