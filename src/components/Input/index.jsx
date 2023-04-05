/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import * as Styled from './styles';

const InputCustom = (props) => {
  const maskDefined = props.mask ?? null;
  const [buttonTypePassword, setButtonTypePassword] = useState(false);

  const HandleChangeEyeInputPassword = () => {
    setButtonTypePassword(!buttonTypePassword);
  };

  return (
    <Styled.InputMaskCustom
      mask={maskDefined}
      value={props.value}
      onChange={props.onChange}
      {...props}
    >
      {(inputProps) => (
        <>
          <TextField
            label={props.label}
            onChange={props.onChange}
            type={props.typeInput === 'password' ? (!buttonTypePassword ? 'password' : props.type) : props.type}
            value={props.value}
            error={props.error}
            InputProps={{
              endAdornment: props.typeInput === 'password' && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setButtonTypePassword(!buttonTypePassword)}
                    edge="end"
                  >
                    {buttonTypePassword ? <Styled.EyeCloseCustom /> : <Styled.EyeOpenCustom />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...inputProps}
          />

        </>

      )}
    </Styled.InputMaskCustom>
  );
};
export default InputCustom;
