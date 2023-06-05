import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { FormSignIn } from './types';

const useSignUP = () => {
    const navigate = useNavigate();

    const {
        handleSubmit, formState: { errors }, control,
    } = useForm<FormSignIn>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const HandleLogin = (data:FormSignIn) => {
        console.log(data);
    };
    return {
        navigate, errors, handleSubmit, control, HandleLogin,
    };
};
export default useSignUP;