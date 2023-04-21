import React from "react";

const Footer: React.FC = () => {
    return (
        <section className="py-10 2xl:py-10 bg-gray-800">
            <p className="text-center text-lg text-white pt-12 px-4 border-t border-gray-500" >
                <span>© 2023 SAI.</span>
                <span className="text-gray-300"> Todos direitos Reservados</span>
            </p>
        </section>
    )
}

export default Footer;