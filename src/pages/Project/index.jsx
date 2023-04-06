import React from 'react';
import * as Styled from './styles';
import InputCustom from '../../components/Input';
import DropdownCustom from '../../components/Dropdown';
import Button from '../../components/Button';
import Struct from '../../components/Layout';

const CreateProject = () => {
  console.log('de');

  return (
    <Struct>
      <Styled.ContainerMaster>

        <Styled.ContainerTitle>
          <Styled.Title>Criação de Projeto</Styled.Title>
        </Styled.ContainerTitle>

        <Styled.ContainerForm>
          <Styled.Form>
            <Styled.ContainerInput>

              <Styled.ContainerInputCodigo>
                <InputCustom label="Código" />
              </Styled.ContainerInputCodigo>

              <Styled.ContainerInputStatus>
                <InputCustom label="Status" />
              </Styled.ContainerInputStatus>

              <Styled.ContainerInputDateRequest>
                <InputCustom label="Data da Requisição" />
              </Styled.ContainerInputDateRequest>

              <Styled.ContainerInputClassificationClient>
                <InputCustom label="Classificação do Cliente" />
              </Styled.ContainerInputClassificationClient>

              <Styled.ContainerInputNameCliente>
                <InputCustom label="Nome do Cliente" />
              </Styled.ContainerInputNameCliente>

              <Styled.ContainerInputContactCliente>
                <InputCustom label="Contato do Cliente" />
              </Styled.ContainerInputContactCliente>

              <Styled.ContainerInputSteps>
                <InputCustom label="Etapas" />
              </Styled.ContainerInputSteps>

              <Styled.ContainerButtom>
                <Button color="primary" typeButton="outlined" title="Cancelar" style={{ marginRight: '50px' }} />
                <Button color="primary" title="Salvar" />
              </Styled.ContainerButtom>

            </Styled.ContainerInput>

          </Styled.Form>
        </Styled.ContainerForm>

      </Styled.ContainerMaster>
    </Struct>
  );
};

export default CreateProject;