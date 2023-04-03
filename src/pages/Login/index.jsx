/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import InputCustom from '../../components/Input';
import * as Styled from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusDrawer, setStatusDrawer] = useState(false);
  const navigate = useNavigate();
  const TesteToast = () => {
    if (!email || !password) {
      return Toast('ERROR', 'Preencha o Email/Senha Corretamente!');
    }
    return navigate('/register');
  };

  return (
    <Styled.ContainerMaster>

      <Styled.ContainerLogo>
        <Styled.ImageLogo src="/logo-sai.png" />
      </Styled.ContainerLogo>

      <Styled.ContainerTitle>
        <Styled.Title>Login</Styled.Title>
      </Styled.ContainerTitle>

      <Styled.ContainerForm>

        <Styled.Form>
          <Styled.ContainerInput>

            <Styled.ContainerInputEmail>
              <InputCustom label="Email" value={email} onChange={(v) => setEmail(v.target.value)} />
            </Styled.ContainerInputEmail>

            <Styled.ConatinerInputPassword>
              <InputCustom label="Senha" value={password} onChange={(v) => setPassword(v.target.value)} />
            </Styled.ConatinerInputPassword>

          </Styled.ContainerInput>

          <Styled.ContainerButtom>
            <Button color="primary" title="Login" onClick={() => TesteToast()} />
          </Styled.ContainerButtom>

          <Styled.containerLinkText>
            <Styled.ContainerTextRegiter>
              <Styled.Text>
                Registre-se
              </Styled.Text>
            </Styled.ContainerTextRegiter>

            <Styled.ContainerTextForgotPassword>
              <Styled.Text>
                Esqueci a Senha
              </Styled.Text>
            </Styled.ContainerTextForgotPassword>

          </Styled.containerLinkText>

        </Styled.Form>
      </Styled.ContainerForm>

    </Styled.ContainerMaster>
  );
};

export default Login;