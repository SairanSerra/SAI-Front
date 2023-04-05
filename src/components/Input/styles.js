import styled from 'styled-components';
import InputMask from 'react-input-mask';
import EyeClose from '@mui/icons-material/VisibilityOff';
import EyeOpen from '@mui/icons-material/Visibility';

export const InputMaskCustom = styled(InputMask)`
width:100%;
`;

export const EyeOpenCustom = styled(EyeOpen)`

&:hover{
    cursor: pointer;
    scale: 1.2;
    transition: 0.25s ease-out;
}
`;

export const EyeCloseCustom = styled(EyeClose)`

&:hover{
    cursor: pointer;
    scale: 1.2;
    transition: 0.25s ease-out;
}
`;