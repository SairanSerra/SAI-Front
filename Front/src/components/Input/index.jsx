import React from 'react';
import * as Styled from './styles';

const InputCustom = (props) => {
  const maskDefined = props.mask ?? null;
  return (
    <Styled.InputMaskCustom mask={maskDefined} />
  );
};
export default InputCustom;
