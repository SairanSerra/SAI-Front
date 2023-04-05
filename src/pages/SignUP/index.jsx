import React from 'react';
import { Controller } from 'react-hook-form';
import * as Styled from './styles';
import InputCustom from '../../components/Input';
import DropdownCustom from '../../components/Dropdown';
import useSignUP from './hooks/useSignUp';
import { ItemsDropdownSignUP } from './utils/itemsDropdown';
import Button from '../../components/Button';

const SignUP = () => {
  const {
    navigate, errors, handleSubmit, control, HandleCreateNewUser,
  } = useSignUP();
  return (
    <Styled.ContainerMaster>

      <Styled.ContainerTitle>
        <Styled.Title>Cadastre - se</Styled.Title>
      </Styled.ContainerTitle>

      <Styled.ContainerForm>

        <Styled.Form>
          <Styled.ContainerInput>

            <Styled.ContainerInputName>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    label="Name"
                    onChange={onChange}
                    value={value}
                    error={errors.name !== undefined}
                  />
                )}
              />

            </Styled.ContainerInputName>

            <Styled.ContainerInputEmail>
              <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: /^[A-Za-z0-9.\-_]+@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,3}.([a-z0-9]{2,})()?$/ }}
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

            <Styled.ContainerInputPassword>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    label="Senha"
                    typeInput="password"
                    onChange={onChange}
                    value={value}
                    error={errors.password !== undefined}
                  />
                )}
              />
            </Styled.ContainerInputPassword>

            <Styled.ContainerInputConfirmPassword>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    label="Confirme a senha"
                    typeInput="password"
                    onChange={onChange}
                    value={value}
                    error={errors.confirmPassword !== undefined}
                  />
                )}
              />
            </Styled.ContainerInputConfirmPassword>

            <Styled.ContainerInputSector>
              <Controller
                name="sector"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <DropdownCustom
                    label="Setor"
                    onChange={onChange}
                    value={value}
                    itens={ItemsDropdownSignUP()}
                    error={errors.sector !== undefined}
                  />
                )}
              />
            </Styled.ContainerInputSector>

            <Styled.ContainerButtom>
              <Button color="primary" typeButton="outlined" title="Voltar" style={{ marginRight: '50px' }} onClick={() => navigate('/')} />
              <Button color="primary" title="Registrar" onClick={handleSubmit(HandleCreateNewUser)} />
            </Styled.ContainerButtom>

          </Styled.ContainerInput>

        </Styled.Form>
      </Styled.ContainerForm>

    </Styled.ContainerMaster>
  );
};

export default SignUP;