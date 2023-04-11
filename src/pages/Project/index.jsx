import React from 'react';
import * as Styled from './styles';
import InputCustom from '../../components/Input';
import DropdownCustom from '../../components/Dropdown';
import Button from '../../components/Button';

const CreateProject = () => {
  console.log('de');

  return (
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
              <InputCustom label="Nome do Projeto" />
            </Styled.ContainerInputStatus>

            <Styled.ContainerInputNameCliente>
              <InputCustom label="Cliente" />
            </Styled.ContainerInputNameCliente>

            <Styled.ContainerInputDateRequest>
              <InputCustom label="Data da Requisição" type="date" mask="99/99/9999" />
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
};

export default CreateProject;