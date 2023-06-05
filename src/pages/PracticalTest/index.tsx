import React from 'react';
import Footer from "../../components/Layout/Footer";
import TableCustom from "../../components/Table";
import TD from "../../components/Table/components/TD";
import TR from "../../components/Table/components/TR";
import ButtonDropdown from '../../components/ButtonDropdown';

const PraticalTest:React.FC = () => {

    const mocHeader = ['ID','Nome Projeto','Data Início','Data Entrega', 'Status', ''];
    const modData = [
        {
            id:1,
            name:'Torno mercânico',
            dtInicio: '15/06/2023',
            dtFim: '27/06/2023',
            status: 'Em Produção'
        },
        {
            id:2,
            name:'Stifler',
            dtInicio: '06/06/2023',
            dtFim: '16/09/2023',
            status: 'Em Planejamento'
        },
        {
            id:3,
            name:'Polia 22"',
            dtInicio: '01/06/2023',
            dtFim: '05/06/2023',
            status: 'Finalizada'
        },
    
    ];
    return(
                
        <div className="w-full h-screen bg-gray-800">
            <div className='pt-28'>     
                <TableCustom header={mocHeader} content={modData}>
                    {modData.map((element, index) => (
                        <TR index={index}>
                            <TD index={index}>{element.id}</TD>
                            <TD index={index}>{element.name}</TD>
                            <TD index={index}>{element.dtInicio}</TD>
                            <TD index={index}>{element.dtFim}</TD>
                            <TD index={index}>{element.status}</TD>
                            <TD index={index}><ButtonDropdown disabled={element.status === 'Finalizada' } /></TD>
                        </TR>
                    ))}
                </TableCustom>
            </div> 
            <div className="bg-gray-800 pt-32">
                <Footer/>
            </div>
                
        </div>
    )
}

export default PraticalTest;