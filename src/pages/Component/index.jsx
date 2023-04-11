import React from 'react';
import * as Styled from './styles';
import InputCustom from '../../components/Input';
import DropdownCustom from '../../components/Dropdown';
import Button from '../../components/Button';

const CreateComponents = () => {
  console.log('de');

  return (
    <Styled.ContainerMaster>

      <Styled.ContainerTitle>
        <Styled.Title>Criação de Componentes</Styled.Title>
      </Styled.ContainerTitle>

      <Styled.ContainerForm>
        <Styled.Form>
          <Styled.ContainerInput>

            <Styled.ContainerInputSpecific>
              <InputCustom label="Parte Number" type="number" style={{ marginRight: 20 }} />
              <InputCustom label="Nome" />
            </Styled.ContainerInputSpecific>

            <Styled.ContainerInputSpecific>
              <InputCustom label="Descrição" style={{ marginRight: 20 }} />
              <InputCustom label="Modelo" />
            </Styled.ContainerInputSpecific>

            <Styled.ContainerInputSpecific>
              <InputCustom label="Fabricante" style={{ marginRight: 20 }} />
              <InputCustom label="Preço" />
            </Styled.ContainerInputSpecific>

            <Styled.ContainerInputSpecific>
              <InputCustom label="Dimensão" style={{ marginRight: 20 }} />
              <InputCustom label="Tipo de Desenho" />
            </Styled.ContainerInputSpecific>

            <Styled.ContainerInputSpecific>
              <InputCustom label="CPP" style={{ marginRight: 20 }} />
              <InputCustom label="Número de padronização" />
            </Styled.ContainerInputSpecific>

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

export default CreateComponents;