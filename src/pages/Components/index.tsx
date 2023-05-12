import React from "react";
import TableCustom from "../../components/Table";
import TR from "../../components/Table/components/TR";
import TD from "../../components/Table/components/TD";
import Paginate from "../../components/Table/components/Paginate";
import Footer from "../../components/Layout/Footer";
import InputCustom from "../../components/InputCustom";
import { useNavigate } from "react-router-dom";

const HomeComponents:React.FC = () => {
    const mocHeader = ['ID','Nome','Idade','test1','test1'];
    const modData = [
        {
            id:1,
            name:'João',
            age:'20',
            test1:'test1',
            test2:'test2'
        },
        {
            id:1,
            name:'João',
            age:'20',
            test1:'test1',
            test2:'test2'
        },
        {
            id:1,
            name:'João',
            age:'20',
            test1:'test1',
            test2:'test2'
        },
        {
            id:1,
            name:'João',
            age:'20',
            test1:'test1',
            test2:'test2'
        },

    ];
    const navigate = useNavigate();
    return(
            
        <div className="w-full h-screen bg-gray-800">
            
            <div className="flex justify-end me-10 pt-14">
                <button className="block w-full lg:w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
                    onClick={() => navigate('/components/register')}>
                    Novo Componente</button>  
            </div>
            <div className="flex justify-left ms-48">
                <div className="w-full md:w-1/4 px-4 mt-20">
                    <div className="flex items-center pl-6 bg-white rounded-full">
                        <InputCustom type="text" placeholder="Fornecedor" />
                    </div>
                </div>
                <div className="w-full md:w-2/12 px-16 ">
                    <a className="block ms-4 mb-4 py-4 mt-20 text-white text-center font-bold border border-gray-50 hover:border-gray-300 rounded-full cursor-pointer" 
                    >Pesquisar</a>
                </div>
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
            <div className="bg-gray-800 pb-3">
                <Paginate numberpages={10} atualpage={1}  />
            </div>

            <div className="bg-gray-800 ">
                <Footer/>
            </div>
            
        </div>
        
    )
}

export default HomeComponents;