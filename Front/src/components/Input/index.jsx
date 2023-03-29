import React from 'react';
import { Input } from '@mui/material';
import * as Styled from './styles';

const InputCustom = (props) => {
  const maskDefined = props.mask ?? null;
  return (
    <Styled.InputMaskCustom mask={maskDefined}>
      {(inputProps) => (<Input {...inputProps} />)}
    </Styled.InputMaskCustom>
  );
};
export default InputCustom;
