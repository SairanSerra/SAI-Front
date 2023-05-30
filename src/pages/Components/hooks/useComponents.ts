import { useQuery } from 'react-query';
import { getComponents } from '../../../services/components';
import { useNavigate } from 'react-router-dom';
import { createComponent } from './types';
import { useForm } from 'react-hook-form';

const useComponents = () => {
    const {data, isLoading, error} = useQuery(['getComponents', ], () => getComponents(), {
        initialData:{
            recordset: [],
            recordsets:[],
            rowsAffected: [0],
           
        }
    })

    console.log(data)
    console.log(isLoading)
    console.log(error)
    const navigate = useNavigate();

    const {
        handleSubmit, formState: { errors }, control,
    } = useForm<createComponent>({
        defaultValues: {
            parteNumber: '',
            name: '',
            description: '',
            model: '',
            manufacturer: '',
            price: '',
            dimension: '',
            drawingType: '',
            lpp: '',
            numberPattern: '',
        },
        mode: 'onChange',
    });

    const HandleCreateNewUser = (data:createComponent) => {
        console.log(data);
    };

    return { data, isLoading ,navigate, errors, handleSubmit, control, HandleCreateNewUser,}
}

export default useComponents;