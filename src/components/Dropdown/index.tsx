import React from 'react';
import { propsDropdown } from './types';

const DropdownCustom:React.FC<propsDropdown> = ({elements}) => {
    return(
        <div className="mb-6 min-w-full">
            <div className="relative">
                <select className="appearance-none block w-full text-center bg-white px-6 py-4 font-bold placeholder-gray-900 border border-gray-50 rounded-full focus:outline-none" name="field-name">
                    {elements.map((element) => (
                        <option value={element.value}>{element.label}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default DropdownCustom;