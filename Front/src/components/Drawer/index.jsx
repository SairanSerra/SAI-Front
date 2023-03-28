import React from 'react';
import { Drawer } from '@mui/material';
import * as Styled from './styles';

const DrawerCustom = () => {
  console.log('drawe');
  return (
    <Drawer
      anchor="left"
      open
      onClose={() => console.log('teste')}
    >
      <Styled.Title>
        teste
      </Styled.Title>
    </Drawer>

  );
};

export default DrawerCustom;