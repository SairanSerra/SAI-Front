import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import React from 'react';

const DropdownCustom = (props) => (
  <FormControl fullWidth>
    <InputLabel>{props.label}</InputLabel>
    <Select
      label={props.label}
    >
      {props.itens.map((element) => (
        <MenuItem value={element.value}>{element.label}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default DropdownCustom;