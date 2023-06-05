/* eslint-disable react/jsx-indent */
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { CurrencyInputOnChangeValues } from 'react-currency-input-field/dist/components/CurrencyInputProps';
import InputMask from 'react-input-mask';

interface propsInputCustom extends InputHTMLAttributes<HTMLInputElement> {
    mask?: string;
    error?: boolean;
    type?: HTMLInputTypeAttribute | "money"
    onValueChange?: (value: string | undefined, name?: string, values?: CurrencyInputOnChangeValues) => void;
}
const InputCustom:React.FC<propsInputCustom> = ({mask ="", error, type="text",placeholder, onChange,value, onValueChange,...rest}) => {
    const classInput = `w-full pr-6 pl-4 py-4 text-center font-bold bg-white placeholder-gray-900 rounded-r-full ${error && 'border-4  border-red-600'}`
    return(
        (mask === "" && type !== "money") ? (
            
            <input 
                className={classInput} 
                type={type} 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...rest} />
            
        ):
            <InputMask mask={mask} onChange={onChange} value={value} {...rest} >
                {(inputProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) =>
                    type === "money" ? (
                        <CurrencyInput 
                            className={classInput} 
                            prefix='R$'
                            decimalSeparator="," 
                            groupSeparator="."
                            decimalsLimit={2}
                            maxLength={10}
                            placeholder={placeholder}
                            onValueChange={onValueChange}
                            value={value}
                        />
                    ): (
                        <input 
                            className={classInput} 
                            type={type} 
                            placeholder={placeholder}
                            onChange={onChange} value={value}
                            {...inputProps} />
                    )
                
                }
            </InputMask>
    );
}

export default InputCustom;