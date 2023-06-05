import React from 'react';
import Footer from '../../components/Layout/Footer';
import { useNavigate } from 'react-router-dom';
import {ImProfile} from 'react-icons/im'

const HomeLogged: React.FC = () => {
    const navigate = useNavigate();
    return(
        <div className="h-screen bg-gray-800">
            <section className="relative py-36 2xl:py-30 bg-gray-800 overflow-hidden">
                <img className="hidden lg:block absolute top-0 left-0 h-screen -ml-96" src="zospace-assets/lines/circle.svg" alt="" />
                <img className="hidden lg:block absolute top-0 right-0 mt-40 -mr-64" src="zospace-assets/lines/circle.svg" alt="" />
                <div className="relative container px-4 mx-auto">
                 
                    <div className="block sm:block md:block xl:flex 2xl:flex lg:flex justify-around lg:px-24">
                        <div className="flex-1 lg:w-2/6 p-5 md:ml-1  hover:scale-110 cursor-pointer transition ease-in-out delay-150 flex justify-center " onClick={() => navigate('/components')}>
                            <div className="p-7 pt-16 bg-gray-600 rounded-lg overflow-hidden w-72 sm:w-112 text-center md:mr-1 md:w-160 2xl:h-112 xl:h-112 xl:w-72 lg:h-112 lg:w-60 md:h-112 2xl:w-72">
                                <div className='flex justify-center text-center'>
                                    <span className="flex mb-8 justify-center items-center w-20 h-20 bg-gray-200 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-gear text-white" viewBox="0 0 16 16">
                                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                        </svg>
                                    </span>
                                </div>
                                   
                                <p className="mb-8 text-3xl font-bold font-heading text-white lg:text-2xl">
                                    <span>Componentes</span>
                                </p>
                                <p className="text-lg text-gray-200 leading-loose">Materias para produção.</p>
                                    
                            </div>
                        </div>
                        <div className="flex-1 lg:w-2/6 p-5 hover:scale-110 cursor-pointer transition ease-in-out delay-150 flex justify-center flex-wrap" onClick={() => navigate('/client')}>
                            <div className="p-7 pt-16 w-72 bg-gray-600 rounded-lg text-center sm:w-112 md:w-160 2xl:h-112 2xl:w-72 xl:w-72 xl:h-112 2xl:ms-2 lg:h-112 lg:w-60 md:h-112">
                                <div className='flex justify-center text-center '>
                                    <span className="flex mb-8 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">                                      
                                        <ImProfile size={50} color="#fff" />                                   
                                    </span>
                                </div>
                                <p className="mb-8 text-3xl font-bold font-heading text-white lg:text-2xl">
                                    <span>Cliente</span>
                                </p>
                                <p className="text-lg text-gray-200 leading-loose">Cadastro de cliente.</p>
                            </div>
                        </div>
                        <div className="flex-1 lg:w-2/6 p-5 hover:scale-110 cursor-pointer transition ease-in-out delay-150 flex justify-center flex-wrap" onClick={() => navigate('/project')}>
                            <div className="p-7 pt-16 w-72 bg-gray-600 rounded-lg text-center sm:w-112 md:w-160 2xl:h-112  2xl:w-72 xl:w-72 xl:h-112 lg:h-112 lg:w-60 md:h-112">
                                <div className='flex justify-center text-center'>
                                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-seam-fill text-white" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
                                        </svg>
                                    </span>
                                </div>
                                <p className="mb-8 text-3xl font-bold font-heading text-white lg:text-2xl">
                                    <span>Projeto</span>
                                </p>
                                <p className="text-lg text-gray-200 leading-loose">Visualização do andamento do projeto.</p>
                            </div>
                        </div>
                        <div className="flex-1 lg:w-2/6 p-5 hover:scale-110 cursor-pointer transition ease-in-out delay-150 flex-wrap flex justify-center" onClick={() => navigate('/practical-test')}>
                            <div className="p-7 pt-16 w-72 bg-gray-600 rounded-lg text-center transition-transform sm:w-112 md:w-160 2xl:h-112 2xl:w-72 xl:w-72 xl:h-112 lg:h-112 lg:w-60 md:h-112">
                                <div className='flex justify-center text-center'>
                                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer text-white" viewBox="0 0 16 16">
                                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                                        </svg>
                                    </span>
                                </div>
                                <p className="mb-8 text-3xl font-bold font-heading text-white lg:text-2xl">
                                    <span>Prova Prática</span>
                                </p>
                                <p className="text-lg text-gray-200 leading-loose">Teste final do produto desenvolvido.</p>
                            </div>
                        </div>

                    </div>
                 
                </div>
            </section>
            <div className='bg-gray-800'>
                <div className='pt-28'>
                    <Footer />  
                </div>
                  
            </div>
            
        </div>
    );

}

export default HomeLogged;