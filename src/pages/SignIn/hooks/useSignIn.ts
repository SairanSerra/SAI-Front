import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { FormSignIn } from './types';
import Toast from '../../../components/Toast';

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
        const emailCorret = data.email === 'saiadmin@gmail.com'
        const passwordCorrect = data.password === '1234'
        if(emailCorret && passwordCorrect){
            return   navigate('/principal')
        }
        Toast("ERROR", "Email/Senha incorreto")
    };
    return {
        navigate, errors, handleSubmit, control, HandleLogin,
    };
};
export default useSignUP;