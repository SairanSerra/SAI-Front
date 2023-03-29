import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import InputCustom from '../../components/Input';
import * as Styled from './styles';
import DrawerCustom from '../../components/Drawer';

const Login = () => {
  const TesteToast = () => {
    Toast('WARNING', 'dshfbdshfbdshfbsfbshfbsdfhsbhfshb');
  };
  const [statusDrawer, setStatusDrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <Styled.ContainerMaster>
      <Styled.Title>Login</Styled.Title>
      <InputCustom mask="99/99/9999" />
      <DrawerCustom onClick={() => setStatusDrawer(false)} openDrawer={statusDrawer} />
      <Button
        title="Cadastre - se"
        onClick={() => {
          TesteToast();
          setStatusDrawer(true);
        }}
      />
    </Styled.ContainerMaster>
  );
};

export default Login;