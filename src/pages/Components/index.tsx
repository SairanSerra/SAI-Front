import React from "react";
import TableCustom from "../../components/Table";
import TR from "../../components/Table/components/TR";
import TD from "../../components/Table/components/TD";
import Paginate from "../../components/Table/components/Paginate";
import Footer from "../../components/Layout/Footer";
import InputCustom from "../../components/InputCustom";

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
    return(
            
        <div className="w-screen h-screen bg-gray-800">
            <div className="">
                <div className="w-1/5 flex justify-center">
                    <InputCustom placeholder="Nome Fornecedor " /> 
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
            <div className="mt-10">
                <Paginate numberpages={10} atualpage={2} />
            </div>

            <div className="mt-10">
                <Footer/>
            </div>
            
        </div>
        
    )
}

export default HomeComponents;