import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

interface propsInputCustom extends InputHTMLAttributes<HTMLInputElement> {
    mask?: string;
    error?: boolean;
}
const InputCustom:React.FC<propsInputCustom> = ({mask, error, ...rest}) => {
    return(
        <InputMask mask={mask} {...rest} >
            {(inputProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => 
                <input className={`w-full pr-6 pl-4 py-4 text-center font-bold bg-white placeholder-gray-900 rounded-r-full ${error && 'border-2 border-red-600'}`} {...inputProps} />}
        </InputMask>
    );
}

export default InputCustom;