import React from "react";

interface propsFooter {
    separator?: boolean
}
const Footer: React.FC<propsFooter> = ({separator = true}) => {
    return (
        <section className="py-10 2xl:py-10 bg-gray-800 bottom-0 w-full">
            <p className={`text-center text-lg text-white pt-12 px-4 ${separator && 'border-t border-gray-500'} `} >
                <span>© 2023 SAI.</span>
                <span className="text-gray-300"> Todos direitos Reservados</span>
            </p>
        </section>
    )
}

export default Footer;