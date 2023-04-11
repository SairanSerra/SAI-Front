/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Button from '../../components/Button';
import InputCustom from '../../components/Input';
import { ListClassification } from './utils/DropdawnClassification';
import DropdownCustom from '../../components/Dropdown';
import * as Styled from './styles';

const CreateClient = () => (

  <Styled.ContainerMaster>

    <Styled.ContainerTitle>
      <Styled.Title>Criação de Clientes</Styled.Title>
    </Styled.ContainerTitle>

    <Styled.ContainerForm>
      <Styled.Form>
        <Styled.ContainerInput>

          <Styled.ContainerInputCodigo>
            <InputCustom label="Nome" />
          </Styled.ContainerInputCodigo>

          <Styled.ContainerInputStatus>
            <DropdownCustom label="Classificação" itens={ListClassification()} />
          </Styled.ContainerInputStatus>

          <Styled.ContainerInputNameCliente>
            <InputCustom label="Email" />
          </Styled.ContainerInputNameCliente>

          <Styled.ContainerInputDateRequest>
            <InputCustom label="Telefone/Ramal" />
          </Styled.ContainerInputDateRequest>

          <Styled.ContainerButtom>
            <Button color="primary" typeButton="outlined" title="Cancelar" style={{ marginRight: '50px' }} />
            <Button color="primary" title="Salvar" />
          </Styled.ContainerButtom>

        </Styled.ContainerInput>

      </Styled.Form>
    </Styled.ContainerForm>

  </Styled.ContainerMaster>
);

export default CreateClient;