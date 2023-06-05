import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { PraticalTest } from './types';

const useSignUP = () => {
    const navigate = useNavigate();

    const {
        handleSubmit, formState: { errors }, control,
    } = useForm<PraticalTest>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onChange',
    });

    const HandleCreateNewUser = (data:PraticalTest) => {
        console.log(data);
    };
    return {
        navigate, errors, handleSubmit, control, HandleCreateNewUser,
    };
};
export default useSignUP;