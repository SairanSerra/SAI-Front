import React, { useState } from 'react';
import * as Styled from './styles';

const DrawerCustom = (props) => (
  <Styled.Drawer
    anchor="left"
    open={props.openDrawer}
    onClose={props.onClick}
  >
    <Styled.ContainerItemsDrawer>
      <Styled.Title>
        teste kdfjsdfbjsdfbjsdfbjs
      </Styled.Title>
    </Styled.ContainerItemsDrawer>
  </Styled.Drawer>

);

export default DrawerCustom;