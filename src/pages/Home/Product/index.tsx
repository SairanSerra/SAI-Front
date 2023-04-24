import React from 'react';
import Footer from '../../../components/Layout/Footer';

const Product:React.FC = () => {
    return (
        <>
            <section className="pt-20 2xl:pt-40 bg-gray-800">
                <div className="container px-4 pb-20 mx-auto">
                    <h2 className="lg:mb-32 text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading text-white text-center">Escolha seu plano</h2>
                    <div className="hidden lg:block max-w-6xl mx-auto">
                        <p className="max-w-sm text-lg text-gray-200 leading-loose">
                            <span>Faça a escolha que atenda sua equipe</span>
                            <span className="text-gray-50 font-medium"> ou entre em contato para mais planos</span>
                        </p>
                    </div>
                </div>
                <div className="bg-blue-50 pt-20 pb-20 2xl:pb-40">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap -mx-2">
                                <div className="hidden lg:block w-full lg:w-1/3 px-2">
                                    <ul className="text-xl">
                                        <li className="mb-8">Dados em nuvem</li>
                                        <li className="mb-8">Usuários</li>
                                        <li className="mb-8">Time</li>
                                        <li className="mb-8">Contato com suporte</li>
                                        <li className="mb-8">Projetos</li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0">
                                    <div className="px-8 py-10 lg:-mt-72 rounded-3xl bg-white text-center">
                                        <div className="mb-14 pb-8 border-b border-gray-100">
                                            <h3 className="mb-12 text-3xl font-bold font-heading">Padrão</h3>
                                            <div className="flex justify-center">
                                                <span className="text-2xl font-bold text-blue-500">R$</span>
                                                <p className="text-5xl font-bold text-blue-500">19,90</p>
                                            </div>
                                        </div>
                                        <ul className="mb-8">
                                            <li className="py-4 text-lg rounded-2xl bg-blue-50">1TB</li>
                                            <li className="py-4 text-lg">5 membros</li>
                                            <li className="py-4 flex items-center justify-center text-lg rounded-2xl bg-blue-50">
                                                <span className="lg:hidden mr-2">Time</span>
                                                <svg className="mr-2" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" stroke-width="1.3"></line></svg>
                                                <span>Não</span>
                                            </li>
                                            <li className="py-4 flex items-center justify-center text-lg">
                                                <span className="lg:hidden mr-2">Contato com suporte</span>
                                                <svg className="mr-2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                                                </svg>
                                                <span>Sim</span>
                                            </li>
                                            <li className="py-4 text-lg rounded-2xl bg-blue-50">10 Projetos</li>
                                        </ul>
                                        <a className="inline-block px-12 py-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Em Breve</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-2">
                                    <div className="px-8 py-10 lg:-mt-72 rounded-3xl bg-white text-center">
                                        <div className="mb-14 pb-8 border-b border-gray-100">
                                            <h3 className="mb-12 text-3xl font-bold font-heading">Completo</h3>
                                            <div className="flex justify-center">
                                                <span className="text-2xl font-bold text-blue-500">R$ </span>
                                                <p className="text-5xl font-bold text-blue-500"> 34,90</p>
                                            </div>
                                        </div>
                                        <ul className="mb-8">
                                            <li className="py-4 text-lg rounded-2xl bg-blue-50">20TB</li>
                                            <li className="py-4 text-lg">100+ membros</li>
                                            <li className="py-4 flex items-center justify-center text-lg rounded-2xl bg-blue-50">
                                                <span className="lg:hidden mr-2">Time</span>
                                                <svg className="mr-2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                                                </svg>
                                                <span>Sim</span>
                                            </li>
                                            <li className="py-4 flex items-center justify-center text-lg">
                                                <span className="lg:hidden mr-2">Contato com suporte</span>
                                                <svg className="mr-2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                                                </svg>
                                                <span>Sim</span>
                                            </li>
                                            <li className="py-4 text-lg rounded-2xl bg-blue-50">100+ Projetos</li>
                                        </ul>
                                        <a className="inline-block px-12 py-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Em Breve</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Product;