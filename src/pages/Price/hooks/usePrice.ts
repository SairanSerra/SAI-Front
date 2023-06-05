import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { loginPrice } from './types';

const usePrice = () => {
    const navigate = useNavigate();

    const {
        handleSubmit, formState: { errors }, control,
    } = useForm<loginPrice>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onChange',
    });

    const HandleCreateNewUser = (data:loginPrice) => {
        console.log(data);
    };
    return {
        navigate, errors, handleSubmit, control, HandleCreateNewUser,
    };
};
export default usePrice;