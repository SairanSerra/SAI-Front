import React from 'react';
import Footer from '../../../components/Layout/Footer';
import InputCustom from '../../../components/InputCustom';
import IconNumber from './Icons/IconNumber';
import IconDescription from './Icons/IconDescription';
import IconHammer from './Icons/IconHammer';
import PecaMecanica from '../../../assets/PeçaMecanica.png';
const RegisterComponents:React.FC = () => {
    return(
        <div className="bg-gray-800">
        
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
                                        <span className="inline-block pr-3 border-r border-gray-50">
                                            <svg className="w-5 h-5" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 21C4.71012 21 0 16.2899 0 10.5C0 4.71012 4.71012 0 10.5 0C16.2899 0 21 4.71012 21 10.5C21 16.2899 16.2899 21 10.5 21ZM10.5 0.875C5.19312 0.875 0.875 5.19312 0.875 10.5C0.875 15.8069 5.19312 20.125 10.5 20.125C15.8069 20.125 20.125 15.8069 20.125 10.5C20.125 5.19312 15.8069 0.875 10.5 0.875Z" fill="black"></path>
                                                <path d="M8.3125 8.75C8.071 8.75 7.875 8.554 7.875 8.3125C7.875 7.58887 7.28612 7 6.5625 7C5.83887 7 5.25 7.58887 5.25 8.3125C5.25 8.554 5.054 8.75 4.8125 8.75C4.571 8.75 4.375 8.554 4.375 8.3125C4.375 7.10675 5.35588 6.125 6.5625 6.125C7.76912 6.125 8.75 7.10675 8.75 8.3125C8.75 8.554 8.554 8.75 8.3125 8.75Z" fill="black"></path>
                                                <path d="M16.1875 8.75C15.946 8.75 15.75 8.554 15.75 8.3125C15.75 7.58887 15.1611 7 14.4375 7C13.7139 7 13.125 7.58887 13.125 8.3125C13.125 8.554 12.929 8.75 12.6875 8.75C12.446 8.75 12.25 8.554 12.25 8.3125C12.25 7.10675 13.2309 6.125 14.4375 6.125C15.6441 6.125 16.625 7.10675 16.625 8.3125C16.625 8.554 16.429 8.75 16.1875 8.75Z" fill="black"></path>
                                                <path d="M10.4997 17.4966C8.70684 17.4966 6.91397 16.8141 5.54984 15.45C5.37922 15.2793 5.37922 15.002 5.54984 14.8313C5.72047 14.6607 5.99784 14.6607 6.16847 14.8313C8.55722 17.2192 12.4422 17.2192 14.831 14.8313C15.0016 14.6607 15.279 14.6607 15.4496 14.8313C15.6202 15.002 15.6202 15.2793 15.4496 15.45C14.0855 16.8141 12.2926 17.4966 10.4997 17.4966Z" fill="black"></path>
                                            </svg>
                                        </span>
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
                                        <span className="inline-block pr-3 border-r border-gray-50">
                                            <svg className="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                                                <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                                                <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                                            </svg>
                                        </span>
                                        <InputCustom type="text" placeholder="Preço" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <span className="inline-block pr-3 border-r border-gray-50">
                                            <svg className="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                                                <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                                                <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                                            </svg>
                                        </span>
                                        <InputCustom type="text" placeholder="Dimensão" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <span className="inline-block pr-3 border-r border-gray-50">
                                            <svg className="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                                                <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                                                <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                                            </svg>
                                        </span>
                                        <InputCustom type="text" placeholder="Tipo de Desenho" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mt-3">
                                    <div className="flex items-center pl-6 bg-white rounded-full">
                                        <span className="inline-block pr-3 border-r border-gray-50">
                                            <svg className="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                                                <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                                                <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                                            </svg>
                                        </span>
                                        <InputCustom type="text" placeholder="CPP" />
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