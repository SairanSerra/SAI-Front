/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import Footer from '../../../components/Layout/Footer';
import InputCustom from '../../../components/InputCustom';
import IconNumber from './Icons/IconNumber';
import IconDescription from './Icons/IconDescription';
import IconHammer from './Icons/IconHammer';
import IconPrice from './Icons/IconPrice';
import IconDraft from './Icons/IconDraft';
import IconName from './Icons/IconName';
import IconSize from './Icons/IconSize';
import InputFileCustom from '../../../components/InputFile';
import { Controller } from 'react-hook-form';
import useRegisterComponents from './hooks/useRegisterComponents';

const RegisterComponents:React.FC = () => {
    const {errors, handleSubmit, control, HandleCreateComponent,setValue
    } = useRegisterComponents();

    return(
        <div className="h-screen bg-gray-800">        
            <section className="relative py-20 2xl:py-15 overflow-hidden bg-gray-800">
                <div className="absolute top-0 left-0 lg:bottom-0 h-full w-full lg:w-10/12 lg:overflow-hidden">
                </div>
                <div className="relative container px-4 lg:py-20 mx-auto">
                    <span className="text-lg text-blue-400 font-bold">SAI Tecnologia</span>
                    <h2 className="mt-8 mb-16 text-5xl font-bold font-heading text-white">Cadastro de Componentes</h2>
                    
                    <div className="flex justify-between">
                        <div className="max-w-2xl flex flex-wrap -mx-8 mb-3 justify-center">
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <IconNumber />
                                    <Controller
                                        name="partNumber"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                mask='99999999999' 
                                                value={value}
                                                error={errors.partNumber !== undefined} 
                                                placeholder="Parte Number" /> 
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <IconName />
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
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <IconDescription />
                                    <Controller
                                        name="description"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                value={value} 
                                                error={errors.description !== undefined}  
                                                type="text"
                                                placeholder="Descrição" /> 
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <IconDescription />
                                    <Controller
                                        name="model"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange}
                                                value={value} 
                                                error={errors.model !== undefined}
                                                type="text"
                                                placeholder="Modelo" />
                                        )} 
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <IconHammer />
                                    <Controller
                                        name="maker"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                value={value} 
                                                error={errors.maker !== undefined} 
                                                type="text" 
                                                placeholder="Fabricante" />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4">
                                <div className="flex items-center pl-6 bg-white rounded-full">
                                    <IconPrice />
                                    <Controller
                                        name="price"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                type="money"
                                                onValueChange={(value) => setValue("price", value!)}
                                                onChange={onChange} 
                                                value={value} 
                                                error={errors.price !== undefined}
                                                placeholder="Preço" /> 
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4 pt-3 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
                                <div className="flex items-center pl-6 bg-white rounded-full">
                                    <IconSize />
                                    <Controller
                                        name="size"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                value={value} 
                                                error={errors.size !== undefined} 
                                                type="text" 
                                                placeholder="Dimensão" />
                                        )} 
                                    />

                                </div>
                            </div>
                            <div className="md:w-1/2 px-4 pt-3 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
                                <div className="flex items-center pl-6 bg-white rounded-full">
                                    <IconDraft />
                                    <Controller
                                        name="typeDraft"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                value={value} 
                                                error={errors.typeDraft !== undefined} 
                                                type="text"
                                                placeholder="Tipo de Desenho" /> 
                                        )} 
                                    />

                                </div>
                            </div>
                            <div className="md:w-1/2 px-4 mt-3">
                                <div className="flex items-center pl-6 bg-white rounded-full">
                                    <IconNumber />
                                    <Controller
                                        name="LPP"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                value={value} 
                                                mask='999999999' 
                                                error={errors.LPP !== undefined} 
                                                type="text" 
                                                placeholder="LPP" /> 
                                        )} 
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-4 mt-3">
                                <div className="flex items-center pl-6 bg-white rounded-full mb-10">
                                    <IconNumber />
                                    <Controller
                                        name="numberPadronization"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputCustom 
                                                onChange={onChange} 
                                                value={value} mask='999999' 
                                                error={errors.numberPadronization !== undefined} 
                                                type="text" 
                                                placeholder="Número de padronização" /> 
                                        )} 
                                    />
                                            
                                </div>
                            </div>
                            <div className=''>
                                <div className='w-82 h-24'>
                                    <Controller
                                        name="imageDocument"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, value } }) => (
                                            <InputFileCustom onChange={(v) => onChange(v.target.files)} error={errors.imageDocument !== undefined} value={value} />  
                                        )} 
                                    />
                                   
                                </div>
                                <div className='pt-20 flex justify-center'>
                                    <button color="primary" onClick={handleSubmit(HandleCreateComponent)} className="block lg:w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Salvar</button>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center ms-6'>
                              
                    </div>
                
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default RegisterComponents;