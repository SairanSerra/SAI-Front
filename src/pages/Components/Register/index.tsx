import React from 'react';
import Footer from '../../../components/Layout/Footer';
import InputCustom from '../../../components/InputCustom';
import IconNumber from './Icons/IconNumber';
import IconDescription from './Icons/IconDescription';
import IconHammer from './Icons/IconHammer';
import PecaMecanica from '../../../assets/PeçaMecanica.png';
import IconPrice from './Icons/IconPrice';
import IconDraft from './Icons/IconDraft';
import IconName from './Icons/IconName';
import IconSize from './Icons/IconSize';
const RegisterComponents:React.FC = () => {
    return(
        <div className="h-screen bg-gray-800">        
            <section className="relative py-20 2xl:py-15 overflow-hidden bg-gray-800">
                <div className="absolute top-0 left-0 lg:bottom-0 h-full w-full lg:w-10/12 lg:overflow-hidden">
                </div>
                <div className="relative container px-4 lg:py-20 mx-auto">
                    <span className="text-lg text-blue-400 font-bold">SAI Tecnologia</span>
                    <h2 className="mt-8 mb-16 text-5xl font-bold font-heading text-white">Cadastro de Componentes</h2>
                    <form action="#">
                        <div className="flex justify-between px-5">
                            <div className="max-w-2xl flex flex-wrap -mx-4 mb-3">
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <IconNumber />
                                        <InputCustom type="text" placeholder="Parte Number" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <IconName />
                                        <InputCustom type="text" placeholder="Nome" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <IconDescription />
                                        <InputCustom type="text" placeholder="Descrição" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <IconDescription />
                                        <InputCustom type="text" placeholder="Modelo" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                        <IconHammer />
                                        <InputCustom type="text" placeholder="Fabricante" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <IconPrice />
                                        <InputCustom type="text" placeholder="Preço" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <IconSize />
                                        <InputCustom type="text" placeholder="Dimensão" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <IconDraft />
                                        <InputCustom type="text" placeholder="Tipo de Desenho" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mt-3">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <IconNumber />
                                        <InputCustom type="text" placeholder="LPP" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mt-3">
                                    <div className="flex items-center pl-6 bg-white rounded-full mb-10">
                                        <IconNumber />
                                        <InputCustom type="text" placeholder="Número de padronização" />
                                    </div>
                                </div>
                            </div>
                            <img className="hidden lg:block " src={PecaMecanica} alt=""style={{height: '300px', width: '300px'}} />
                        </div>
                        <div className='flex w-2/5 justify-center '>
                            <button className="block w-full lg:w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Salvar</button>  
                        </div>
                        
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default RegisterComponents;