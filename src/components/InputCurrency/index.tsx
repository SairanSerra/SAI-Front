import React, { InputHTMLAttributes } from 'react'
import CurrencyInput from 'react-currency-input-field'

interface propsInputCurrency extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}
const InputCurrency:React.FC<propsInputCurrency> = ({error, value, onChange}: propsInputCurrency) => {
    return(<CurrencyInput className={`w-full pr-6 pl-4 py-4 text-center font-bold bg-white placeholder-gray-900 rounded-r-full ${error && 'border-4  border-red-600'}`} 
        prefix='R$ '
        decimalSeparator="," 
        groupSeparator="."
        decimalsLimit={2}
        maxLength={10}
        onChange={onChange}
        value={value}
    />)
}

export default InputCurrency;