import React from 'react';
import Footer from '../../components/Layout/Footer';

const HomeLogged: React.FC = () => {

    return(
        <div className="bg-gray-800 h-screen">
            <section className="relative py-40 2xl:py-40 bg-gray-800 overflow-hidden">
                <img className="hidden lg:block absolute top-0 left-0 h-screen -ml-96" src="zospace-assets/lines/circle.svg" alt="" />
                <img className="hidden lg:block absolute top-0 right-0 mt-40 -mr-64" src="zospace-assets/lines/circle.svg" alt="" />
                <div className="relative container px-4 mx-auto">
                    <div>
                        <div className="flex flex-wrap -m-5">
                            <div className="w-full lg:w-1/3 p-5 hover:scale-110 cursor-pointer transition ease-in-out delay-150">
                                <div className="p-16 bg-gray-600 rounded-lg">
                                    <span className="flex mb-8 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cash-coin text-white" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                                        </svg>
                                    </span>
                                    <p className="mb-8 text-5xl font-bold font-heading text-white">
                                        <span>Cotação</span>
                                    </p>
                                    <p className="text-lg text-gray-200 leading-loose">Setor de cotação de projeto.</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-5 hover:scale-110 cursor-pointer transition ease-in-out delay-150">
                                <div className="p-16 bg-gray-600 rounded-lg">
                                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-seam-fill text-white" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
                                        </svg>
                                    </span>
                                    <p className="mb-8 text-5xl font-bold font-heading text-white">
                                        <span>Projeto</span>
                                    </p>
                                    <p className="text-lg text-gray-200 leading-loose">Visualização do andamento do projeto.</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-5 hover:scale-110 cursor-pointer transition ease-in-out delay-150">
                                <div className="p-16 bg-gray-600 rounded-lg">
                                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer text-white" viewBox="0 0 16 16">
                                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                                        </svg>
                                    </span>
                                    <p className="mb-8 text-5xl font-bold font-heading text-white">
                                        <span>Prova Prática</span>
                                    </p>
                                    <p className="text-lg text-gray-200 leading-loose">Teste final do produto desenvolvido.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer  /> 
        </div>
    );

}

export default HomeLogged;