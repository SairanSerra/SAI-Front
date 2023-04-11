/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import InputCustom from '../../components/Input';
import useLogin from './hooks/useLogin';
import * as Styled from './styles';

const Login = () => {
  const {
    navigate, errors, handleSubmit, control, HandleLogin,
  } = useLogin();

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
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    label="Email"
                    onChange={onChange}
                    value={value}
                    error={errors.email !== undefined}
                  />
                )}
              />
            </Styled.ContainerInputEmail>

            <Styled.ConatinerInputPassword>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    label="password"
                    onChange={onChange}
                    value={value}
                    error={errors.password !== undefined}
                  />
                )}
              />

            </Styled.ConatinerInputPassword>

          </Styled.ContainerInput>

          <Styled.ContainerButtom>
            <Button color="primary" title="Login" onClick={handleSubmit(HandleLogin)} />
          </Styled.ContainerButtom>

          <Styled.containerLinkText>
            <Styled.ContainerTextRegiter>
              <Styled.Text onClick={() => navigate('/register')}>
                Registre-se
              </Styled.Text>
            </Styled.ContainerTextRegiter>

            {/* <Styled.ContainerTextForgotPassword>
              <Styled.Text>
                Esqueci a Senha
              </Styled.Text>
            </Styled.ContainerTextForgotPassword> */}

          </Styled.containerLinkText>

        </Styled.Form>
      </Styled.ContainerForm>

    </Styled.ContainerMaster>
  );
};

export default Login;