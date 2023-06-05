import React from 'react';
import Footer from '../../components/Layout/Footer';
import ImageToolShop from '../../assets/ferramentaria.webp';
import { useNavigate } from 'react-router-dom';

const Home:React.FC = () => {
    const navigate = useNavigate();
    console.log(import.meta.env.VITE_PUBLIC_API_SAI)
    return(
        <div className='h-full bg-gray-800'>        
            <section className="pb-20 ">
                <nav className="relative">
                    <div className="flex py-8 px-4 lg:px-8 justify-between items-center">
                        <div className="text-2xl" />
                           
                        <div className="lg:hidden">
                            <button className="p-2 navbar-burger">
                                <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>
                            </button>
                        </div>
                        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <ul className="flex items-center text-white space-x-10">
                                <li><a className="text-white font-bold text-lg hover:cursor-pointer hover:text-blue-500" onClick={() => navigate('/home/product')}>Produtos</a></li>
                                <span>
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg>
                                </span>
                                <li><a className="text-white font-bold text-lg hover:cursor-pointer hover:text-blue-500" onClick={() => navigate('/home/feature')}>Lançamentos</a></li>
                                <span>
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg>
                                </span>
                                <li><a className="text-white font-bold text-lg hover:cursor-pointer hover:text-blue-500" onClick={() => navigate('/contact')}>Contato</a></li>
                            </ul>
                        </div>
                        <div className="hidden lg:block"><a className="block mb-4 py-4 px-12 my-5 text-white text-center font-bold border border-gray-50 hover:border-gray-300 rounded-full cursor-pointer"
                            onClick={() => navigate('/login')}>Entrar</a></div>
                    </div>
                </nav>
                <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                            <span className="text-lg font-bold text-blue-400">Gerenciamento de Ferramentaria</span>
                            <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">Ferramenta de qualidade para resultados excelentes.</h2>
                            <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">Para facilitar a gestão do seu setor empresarial de ferramentaria</p>
                            {/* <a className="inline-block px-12 py-5 text-lg cursor-pointer text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" 
                                onClick={() => navigate('/signup')}>Cadastre-se</a> */}
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <img className="w-full rounded backdrop-blur-lg" src={ImageToolShop} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                <div className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
                    <div>
                        <ul>
                            <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" onClick={() => navigate('/home/product')}>Produtos</a></li>
                            <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" onClick={() => navigate('/home/feature')}>Lançamentos</a></li>
                            <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"onClick={() => navigate('/contact')}>Contato</a></li>
                        </ul>
                    </div>
                    <div className="mt-auto px-10">
                        <div className="pt-6">
                            <a className="block mb-4 py-4 px-12 my-5 text-white text-center font-bold border border-gray-50 hover:border-gray-300 rounded-full cursor-pointer" 
                                onClick={() => navigate('/login')}>Entrar</a>
                            {/* <a className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                                onClick={() => navigate('/signup')}
                            >Cadastre-se</a> */}
                        </div>
                            
                        <p className=" mb-4 text-lg text-center">
                            <span>2023 © SAI. Todos direitos reservados.</span>
                        </p>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div> 
    )
}

export default Home;