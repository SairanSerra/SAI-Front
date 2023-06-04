import React from 'react'

interface propsTD {
    children: React.ReactNode
    index: number
    colSpan?: number
}

const TD:React.FC<propsTD> = ({children, index, colSpan}) => {
    const alternColor = index % 2 === 0 ? 'text-gray-100' : 'text-gray-700';
    return(<td className={`py-5 pl-10 ${alternColor} text-center px-10`} colSpan={colSpan} >{children}</td>)
}

export default TD;