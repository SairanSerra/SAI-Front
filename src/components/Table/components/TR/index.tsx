import React from 'react'

interface propsTR {
    index: number;
    children: React.ReactNode
}

const TR:React.FC<propsTR> = ({children, index}) => {
    const alternColor = index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-200';
    return(<tr className={`text-xl text-white ${alternColor}`}>{children}</tr>)
}

export default TR;