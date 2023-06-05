export interface propsDropdown {
    disabled: boolean
}
const ButtonDropdown = ({disabled}:propsDropdown) => {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-1/2 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" disabled={disabled}>
                <option>Em Produção</option>
                <option>Em Planejamento</option>
                <option>Finalizada</option>
                <option>Em Atraso</option>
            </select>
        </div>
    )
}

export default ButtonDropdown