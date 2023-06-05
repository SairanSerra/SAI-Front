import React from 'react';
import Footer from "../../components/Layout/Footer";
import TableCustom from "../../components/Table";
import TD from "../../components/Table/components/TD";
import TR from "../../components/Table/components/TR";
import { useNavigate } from 'react-router-dom';

const Project:React.FC = () => {
    const navigate = useNavigate();
    const mocHeader = ['Código','Status','Data Req.','Class. Cliente','Cliente'];
    const modData = [
        {
            id:1,
            name:'Em Produção',
            age:'06/05/2023',
            test1:'Interno',
            test2:'BOSCH'
        },    
        {
            id:2,
            name:'Em Planejamento',
            age:'06/05/2023',
            test1:'Externo',
            test2:'SCHNEIDER'
        },   
        {
            id:3,
            name:'Em Teste',
            age:'06/05/2023',
            test1:'Interno',
            test2:'BOSCH'
        }    
    ];
    return(
                
        <div className="w-full h-screen bg-gray-800">
                
            <div className="flex justify-end me-10 pt-14">
                <button className="block w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
                    onClick={() => navigate('/project/register')}>Novo Projeto</button>  
            </div>
                
            <TableCustom header={mocHeader} content={modData}>
                {modData.map((element, index) => (
                    <TR index={index}>
                        <TD index={index}>{element.id}</TD>
                        <TD index={index}>{element.name}</TD>
                        <TD index={index}>{element.age}</TD>
                        <TD index={index}>{element.test1}</TD>
                        <TD index={index}>{element.test2}</TD>
                    </TR>
                ))}
            </TableCustom>
    
            <div className="bg-gray-800 pt-72 ">
                <Footer/>
            </div>
                
        </div>
    )
}
export default Project;