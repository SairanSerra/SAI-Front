import React from 'react';
import Footer from '../../../components/Layout/Footer';
import ImageMen from '../../../assets/men-stars.png';
import ImageCircle from '../../../assets/circle.svg';
import ImagePurpleLine from '../../../assets/purple-line.svg';
// import DropdownCustom from '../../../components/Dropdown';
import InputCustom from '../../../components/InputCustom';

const RegisterPrice:React.FC = () => {
    return(
        <div className="h-screen w-full bg-gray-800">
        
            <section className="relative py-20 2xl:py-15 overflow-hidden bg-gray-800">
                <div className="absolute top-0 left-0 lg:bottom-0 h-full w-full lg:w-10/12 lg:overflow-hidden">
                    <img className="hidden lg:block mt-64 ml-112" src={ImageCircle} alt="" />
                </div>
                <img className="hidden lg:block absolute h-128 bottom-0 right-0 z-10" src={ImageMen} alt="" />
                <img className="hidden lg:block absolute w-96 bottom-0 right-0 mr-64 mb-24" src={ImagePurpleLine} alt="" />
                <div className="relative container px-4 lg:py-20 mx-auto">
                    <span className="text-lg text-blue-400 font-bold">Vamos começar?</span>
                    <h2 className="mt-8 mb-16 text-5xl font-bold font-heading text-white">Registre sua conta!</h2>
                    <form action="#">
                        <div className="max-w-2xl flex flex-wrap -mx-4 mb-3">
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
                                <div className="flex items-center pl-6 bg-white rounded-full">
                                    <span className="inline-block pr-3 border-r border-gray-50">
                                        <svg className="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                                            <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                                            <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <InputCustom type="email" placeholder="exemplo@exemplo.com" />
                                </div>
                            </div>
                        </div>
                        <div className="max-w-2xl flex flex-wrap -mx-4 mb-12">
                            <div className="w-full md:w-1/2 px-4">
                                <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <span className="inline-block pr-3 border-r border-gray-50">
                                        <svg className="w-5 h-5" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z" fill="black"></path>
                                            <path d="M8.49957 8.93555C7.26775 8.93555 6.26562 9.93767 6.26562 11.1695C6.26562 11.8678 6.60247 12.5282 7.1592 12.9473V14.7438C7.1592 15.4828 7.76062 16.0842 8.49957 16.0842C9.2381 16.0842 9.83994 15.4828 9.83994 14.7438V12.9473C10.3966 12.5277 10.7335 11.8678 10.7335 11.1695C10.7335 9.93767 9.7309 8.93555 8.49957 8.93555ZM9.16793 12.3227C9.03032 12.4022 8.94636 12.5501 8.94636 12.7087V14.7438C8.94636 14.9904 8.74572 15.1906 8.49957 15.1906C8.25342 15.1906 8.05278 14.9904 8.05278 14.7438V12.7087C8.05278 12.5501 7.96833 12.4031 7.83072 12.3227C7.41026 12.0778 7.1592 11.6467 7.1592 11.1695C7.1592 10.4305 7.76062 9.82913 8.49957 9.82913C9.2381 9.82913 9.83994 10.4305 9.83994 11.1695C9.83994 11.6467 9.58881 12.0778 9.16793 12.3227Z" fill="black"></path>
                                        </svg>
                                    </span>
                                    <InputCustom type="password" placeholder="Senha" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="flex items-center pl-6 bg-white rounded-full">
                                    <span className="inline-block pr-3 border-r border-gray-50">
                                        <svg className="w-5 h-5" width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6243 13.5625C14.3939 13.5625 14.2077 13.7581 14.2077 14V16.4517C14.2077 18.2573 13.0443 20.125 11.0973 20.125H4.42975C2.56848 20.125 0.874349 18.3741 0.874349 16.4517V10.5H14.6243C14.8547 10.5 15.041 10.3044 15.041 10.0625C15.041 9.82058 14.8547 9.625 14.6243 9.625H14.2077V5.95175C14.2077 2.39183 11.8635 0 8.37435 0H6.70768C3.21855 0 0.874349 2.39183 0.874349 5.95175V9.625H0.457682C0.227282 9.625 0.0410156 9.82058 0.0410156 10.0625V16.4517C0.0410156 18.8322 2.13268 21 4.42975 21H11.0972C13.3089 21 15.0409 19.0023 15.0409 16.4517V14C15.041 13.7581 14.8547 13.5625 14.6243 13.5625ZM1.70768 5.95175C1.70768 2.86783 3.67022 0.875 6.70768 0.875H8.37435C11.4119 0.875 13.3743 2.86783 13.3743 5.95175V9.625H1.70768V5.95175Z" fill="black"></path>
                                            <path d="M17.8815 9.37104C17.7482 9.17371 17.4878 9.12821 17.3003 9.26695L7.58655 16.4918L5.75235 14.5655C5.58942 14.3944 5.32608 14.3944 5.16322 14.5655C5.00028 14.7365 5.00028 15.013 5.16322 15.1841L7.24655 17.3716C7.32695 17.456 7.43362 17.4998 7.54115 17.4998C7.62488 17.4998 7.70868 17.4731 7.78282 17.4193L17.7828 9.98179C17.9703 9.84137 18.0141 9.56837 17.8815 9.37104Z" fill="black"></path>
                                        </svg>
                                    </span>
                                    <InputCustom type="password" placeholder="Confirme a senha" />
                                </div>
                            </div>
                            <div className=" w-full px-4 my-3">
                                {/* <DropdownCustom elements={ItemsDropdownSignUP()} /> */}
                            </div>
                        </div>
                        <div className='flex w-2/5 justify-center'>
                            <button className="block w-full lg:w-auto py-4 px-12 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Criar Conta</button>  
                        </div>
                        
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default RegisterPrice;