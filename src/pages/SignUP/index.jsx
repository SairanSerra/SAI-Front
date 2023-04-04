import React from 'react';
import * as Styled from './styles';
import Struct from '../../components/Layout';
import InputCustom from '../../components/Input';
import DropdownCustom from '../../components/Dropdown';
import useSignUP from './hooks/useSignUp';
import { ItemsDropdownSignUP } from './utils/itemsDropdown';
import Button from '../../components/Button';

const SignUP = () => {
  const { navigate } = useSignUP();
  return (
    <Struct styles={{ display: 'flex', justifyContent: 'center' }}>
      <Styled.ContainerMaster>

        <Styled.ContainerTitle>
          <Styled.Title>Cadastre - se</Styled.Title>
        </Styled.ContainerTitle>

        <Styled.ContainerForm>

          <Styled.Form>
            <Styled.ContainerInput>

              <Styled.ContainerInputName>
                <InputCustom label="Name" styles={{ width: '100%' }} />
              </Styled.ContainerInputName>

              <Styled.ContainerInputEmail>
                <InputCustom label="Email" />
              </Styled.ContainerInputEmail>

              <Styled.ContainerInputPassword>
                <InputCustom label="Senha" />
              </Styled.ContainerInputPassword>

              <Styled.ContainerInputConfirmPassword>
                <InputCustom label="Confirme a senha" />
              </Styled.ContainerInputConfirmPassword>

              <Styled.ContainerInputSector>
                <DropdownCustom label="Setor" itens={ItemsDropdownSignUP()} />
              </Styled.ContainerInputSector>

              <Styled.ContainerButtom>
                <Button color="primary" variant="outlined" title="Voltar" />
                <Button color="primary" title="Registrar" />
              </Styled.ContainerButtom>

            </Styled.ContainerInput>

          </Styled.Form>
        </Styled.ContainerForm>

      </Styled.ContainerMaster>
    </Struct>
  );
};

export default SignUP;