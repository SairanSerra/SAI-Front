/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import TableCustom from '../../components/Table';
import TR from '../../components/Table/components/TR';
import TD from '../../components/Table/components/TD';
import Footer from '../../components/Layout/Footer';
import useClient from './hooks/useClient';
import {VscTrash} from 'react-icons/vsc'

const HomeClient:React.FC = () => {

    const {handleDeleteClient, mocHeader, navigate, data, isLoading } = useClient()
    console.log()
    return(
        <div className="w-full h-screen bg-gray-800">
                
            <div className="flex justify-end me-10 pt-14">
                <button className="block w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" onClick={() => navigate('/client/register')}>Cadastrar Cliente</button>  
            </div>
            <div className='pt-14'>
                <TableCustom header={mocHeader} content={data!.content!} isLoading={isLoading}>
                    {data!.content.map((element, index) => (
                        <TR index={index}>
                            <TD index={index}>{element.id}</TD>
                            <TD index={index}>{element.name}</TD>
                            <TD index={index}>{element.type}</TD>
                            <TD index={index}>{element.createdAt}</TD>
                            <TD index={index}><span className="hover:cursor-pointer" onClick={() => handleDeleteClient.mutate(element.id)}><VscTrash size={25} /></span></TD>
                        </TR>
                    ))}
                </TableCustom>
            </div>
    
            <div className="bg-gray-800 pt-48">
                <Footer/>
            </div>
                
        </div>
    )
}

export default HomeClient;