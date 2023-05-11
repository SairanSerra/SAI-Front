import React, { useEffect, useState } from "react";
import TableCustom from "../../components/Table";
import TR from "../../components/Table/components/TR";
import TD from "../../components/Table/components/TD";
import Paginate from "../../components/Table/components/Paginate";
import Footer from "../../components/Layout/Footer";
import InputCustom from "../../components/InputCustom";
import Axios from "axios";


const HomeComponents:React.FC = () => {
    const [listComponentes, setListComponentes] = useState([]);

    const [busca, setBusca] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/getComponente").then((response) => {
          setListComponentes(response.data.recordset);
        });
      }, []);

      const lowerBusca = busca.toLowerCase();

      const filterMaterial = listComponentes.filter((values) =>
      values.ds_Nome.toLowerCase().includes(lowerBusca)
    );


    const mocHeader = ['Part Number','Nome','Modelo','Fabricante','Dimensão'];
    const modData = [
        {
            id:1,
            name:'João',
            age:'20',
            test1:'test1',
            test2:'test2'   
        }
    ];
    return(
            
        <div className="w-screen h-screen bg-gray-800">
            <div className="">
                <div className="w-1/5 flex justify-center">
                    <InputCustom placeholder="Nome Fornecedor " /> 
                </div>
            </div>
            
            <input
            type="text"
            name="nome"
            placeholder="Buscar material..."
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />

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