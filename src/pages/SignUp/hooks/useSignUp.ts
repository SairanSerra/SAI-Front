import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { FormSignUp } from './types';

const useSignUP = () => {
    const navigate = useNavigate();

    const {
        handleSubmit, formState: { errors }, control,
    } = useForm<FormSignUp>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onChange',
    });

    const HandleCreateNewUser = (data:FormSignUp) => {
        console.log(data);
    };
    return {
        navigate, errors, handleSubmit, control, HandleCreateNewUser,
    };
};
export default useSignUP;