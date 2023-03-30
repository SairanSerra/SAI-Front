import React from 'react';
import { Input, TextField } from '@mui/material';
import * as Styled from './styles';

const InputCustom = (props) => {
  const maskDefined = props.mask ?? null;
  return (
    <Styled.InputMaskCustom
      mask={maskDefined}
      value={props.value}
      onChange={props.onChange}
      {...props}
    >
      {(inputProps) => (
        <TextField
          label={props.label}
          onChange={props.onChange}
          value={props.value}
          {...inputProps}
        />
      )}
    </Styled.InputMaskCustom>
  );
};
export default InputCustom;
