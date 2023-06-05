export interface Elements {
    label:string;
    value:string;
}

export interface propsDropdown {
    elements: Elements[];
    errors?: boolean
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
    value?: string
}