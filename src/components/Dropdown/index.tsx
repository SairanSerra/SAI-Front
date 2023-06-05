import React from 'react';
import { propsDropdown } from './types';

const DropdownCustom:React.FC<propsDropdown> = ({elements, onChange, value, errors}) => {
    return(
        <select className={`w-full pr-6 pl-4 py-4 text-center font-bold bg-white placeholder-gray-900 rounded-r-full ${errors ? 'border-4 border-red-800' : ''} `} 
            onChange={onChange}
            value={value}
        >
            {elements.map((element) => (
                <option value={element.value}>{element.label}</option>
            ))}
        </select>    
    );
}

export default DropdownCustom;