import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { LoginProject } from './types';

const useProject = () => {
    const navigate = useNavigate();

    const {
        handleSubmit, formState: { errors }, control,
    } = useForm<LoginProject>({
        defaultValues: {
            code: '',
            date: '',
            client: '',
        },
        mode: 'onChange',
    });

    const HandleLogin = (data:LoginProject) => {
        console.log(data);
    };
    return {
        navigate, errors, handleSubmit, control, HandleLogin,
    };
};
export default useProject;