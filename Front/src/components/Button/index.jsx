import React from 'react';
import * as Styled from './styles';

const Button = (props) => {
  const typeButton = props.type ?? 'contained';

  return (
    <Styled.ButtonCustom {...props} variant={typeButton}>{props.title}</Styled.ButtonCustom>
  );
};

export default Button;