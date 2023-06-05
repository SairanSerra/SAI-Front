/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import Footer from '../../../components/Layout/Footer';
import InputCustom from '../../../components/InputCustom';
import { Controller } from 'react-hook-form';
import useRegisterClient from './hooks/useRegisterClient';
import {FaUserTie} from 'react-icons/fa'
import DropdownCustom from '../../../components/Dropdown';
import { ElementClassificationClient } from '../../Project/utils/elementSelect';

const RegisterComponents:React.FC = () => {
    const {errors, handleSubmit, control, HandleCreateClient, navigate
    } = useRegisterClient();

    return(
        <div className="h-screen bg-gray-800">        
            <section className="relative py-20 2xl:py-15 overflow-hidden bg-gray-800">
                <div className="absolute top-0 left-0 lg:bottom-0 h-full w-full lg:w-10/12 lg:overflow-hidden">
                </div>
                <div className="relative container px-4 lg:py-20 mx-auto">
                    <span className="text-lg text-blue-400 font-bold">SAI Tecnologia</span>
                    <h2 className="mt-8 mb-16 text-5xl font-bold font-heading text-white">Cadastro de Clientes</h2>
                    
                    <div className="flex justify-between">
                        <div className="max-w-2xl flex flex-wrap -mx-8 mb-3 justify-center">
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <FaUserTie size={30} />
                                    <Controller
                                        name="name"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                mask='' 
                                                value={value}
                                                error={errors.name !== undefined}
                                                type="text" 
                                                placeholder="Nome" /> 
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 h-14 mb-3 bg-white rounded-full">
                                    <FaUserTie size={30} />
                                    <Controller
                                        name="type"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <DropdownCustom elements={ElementClassificationClient()} onChange={onChange} errors={errors.type !== undefined} value={value} />
                                        )}
                                    />
                                </div>
                                    
                            </div>
                            <div className='pt-20 flex'>
                                <button className="block w-full lg:w-auto me-4 py-4 px-12 text-white text-center font-bold border border-gray-50 hover:border-gray-300 rounded-full cursor-pointer" onClick={() => navigate('/project')}>Cancelar</button> 
                                <button color="primary" onClick={handleSubmit(HandleCreateClient)} className="block lg:w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Salvar</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center ms-6'>
                              
                    </div>
                
                </div>
            </section>
            <div className='pt-48'>
                <Footer />
            </div>
            
        </div>
    );
}

export default RegisterComponents;