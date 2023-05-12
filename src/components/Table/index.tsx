/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface propsTableCustom {
    header: string[];
    content: any[];
    children: React.ReactNode
}

const TableCustom:React.FC<propsTableCustom> = ({header, children, content}) => {
    return(

        <div>
            <section className="relative py-20 2xl:py-30 bg-gray-800">
                <div className="container px-4 pb-20 mx-auto">
                    <div className="pt-20 overflow-x-auto overflow-y-hidden">
                        <table className="table-auto w-full mb-10">
                            <thead>
                                <tr className="text-lg text-gray-200 font-bold">
                                    {header.map((element) =>(
                                        <th key={element} className="px-6 py-4 whitespace-nowrap">{element}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {content.length === 0 ? (
                                    <tr className="text-xl text-white bg-gray-700">
                                        <td className="py-5 pl-10 text-gray-200 text-center" colSpan={header.length} >Não há dados</td>
                                    </tr>
                                ) : children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TableCustom;