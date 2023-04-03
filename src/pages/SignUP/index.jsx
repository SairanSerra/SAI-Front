import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import Button from '../../components/Button';
import * as Styled from './styles';
import Struct from '../../components/Layout';
import InputCustom from '../../components/Input';
import DropdownCustom from '../../components/Dropdown';

const SignUP = () => {
  const ItensDropdown = [
    {
      label: 'Ferramentaria',
      value: 'FERRAMENTARIA',
    },
    {
      label: 'Compras',
      value: 'COMPRAS',
    },
    {
      label: 'Projeto',
      value: 'PROJETO',
    },
  ];
  const navigate = useNavigate();
  return (
    <Struct>
      <Styled.ContainerMaster>
        <Styled.SubContainer>
          <Styled.ContainerTitle>
            <Styled.Title>Cadastre-se</Styled.Title>
          </Styled.ContainerTitle>

          <Styled.ContainerForm>

            <Styled.ContainerMasterInputs>

              <Styled.ContainerEmail>
                <InputCustom label="Email" styles={{ width: 100 }} />
              </Styled.ContainerEmail>

              <Styled.ContainerPassword>
                <InputCustom label="Senha" />
              </Styled.ContainerPassword>

              <Styled.ContainerConfirmPassword>
                <InputCustom label="Confirme a Senha" />
              </Styled.ContainerConfirmPassword>

              <Styled.ContainerSection>
                <DropdownCustom label="Setor" itens={ItensDropdown} />
              </Styled.ContainerSection>

            </Styled.ContainerMasterInputs>

            <Styled.ContainerButton>
              {/* <Styled.ContainerButtonBack> */}
              <Styled.ButtonBack title="Voltar" typeButton="outlined" onClick={() => navigate('/')} />
              {/* </Styled.ContainerButtonBack> */}

              {/* <Styled.ContainerButtonRegister> */}
              <Styled.ButtonRegister title="Cadastrar" onClick={() => navigate('/')} />
              {/* </Styled.ContainerButtonRegister> */}

            </Styled.ContainerButton>

          </Styled.ContainerForm>
        </Styled.SubContainer>
      </Styled.ContainerMaster>
    </Struct>
  );
};

export default SignUP;