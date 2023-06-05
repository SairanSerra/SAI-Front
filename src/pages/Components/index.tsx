/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import TableCustom from "../../components/Table";
import TR from "../../components/Table/components/TR";
import TD from "../../components/Table/components/TD";
import Footer from "../../components/Layout/Footer";
import useComponents from "./hooks/useComponents";
import { HeaderTableComponents } from "../../constants/components/headerTable";
import {BiArchiveIn} from 'react-icons/bi'
import {VscTrash} from 'react-icons/vsc'

const HomeComponents:React.FC = () => {

    const {data, navigate, handleDeleteComponent, isLoading} = useComponents()

    return(
            
        <div className="w-full h-screen bg-gray-800">
            
            <div className="flex justify-end me-10 pt-14">
                <button className="block w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
                    onClick={() => navigate('/components/register')}>
                    Novo Componente</button>  
            </div>
            
            <TableCustom header={HeaderTableComponents} content={data!.content.data} isLoading={isLoading}>
                {data?.content.data.length === 0 ? <TD index={0} colSpan={HeaderTableComponents.length}>Sem dados</TD>  : 
                    data?.content.data.map((element, index) => (
                        <TR index={index}>
                            <TD index={index}>{element.part_number}</TD>
                            <TD index={index}>{element.name}</TD>
                            <TD index={index}>{element.model}</TD>
                            <TD index={index}>{element.maker}</TD>
                            <TD index={index}>{element.size}</TD>
                            <div className=" flex justify-center">
                                <TD index={index}>{<a href={`${import.meta.env.VITE_PUBLIC_API_SAI}/uploads/${element.image_document}`} target="_blank" download={`Documento componente ${element.name}.pdf`}>
                                    <BiArchiveIn className="hover:cursor-pointer" size={25} />
                                </a>}</TD>
                            </div>
                            <TD index={index}><span className="hover:cursor-pointer" onClick={() => handleDeleteComponent.mutate(element.id)}><VscTrash size={25} /></span></TD>
                            
                        </TR>
                    ))}
            </TableCustom>

            <div className="bg-gray-800 pt-72">
                <Footer/>
            </div>
            
        </div>
        
    )
}

export default HomeComponents;
