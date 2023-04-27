import React from "react";
import Footer from "../../Layout/Footer";
import ImageCircle from '../../../assets/circle.svg';
import ImageFiveStar from '../../../assets/five-stars.svg';
import ImageBlueDoubleCircle from '../../../assets/blue-double-circle.svg';
import ImageError from '../../../assets/error-404.svg';
import { useNavigate } from "react-router-dom";

const StatusNotFound:React.FC = () => {
    const navigate = useNavigate();
    return(
        <div className="h-screen bg-gray-800">
        
            <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden mb-5">
                <img className="absolute top-0 right-0 md:-mr-96 md:-mt-112" src={ImageCircle} alt="" />
                <img className="absolute top-0 right-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src={ImageFiveStar} alt="" />
                <img className="hidden lg:block absolute top-0 left-0 h-64 -ml-10" src={ImageBlueDoubleCircle} alt="" />
                <div className="relative container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <img className="mx-auto mb-8" src={ImageError} alt="" />
                        <div className="max-w-md mx-auto text-center">
                            <h2 className="mb-20 text-2xl text-white font-bold font-heading">Desculpe, Não encontramos a página que tentou acessar</h2>
                            <a className="inline-block cursor-pointer px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" 
                                onClick={() => navigate('/')}>Voltar ao início</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-50">
                <Footer />  
            </div>
            
        </div>
    );
}

export default StatusNotFound;