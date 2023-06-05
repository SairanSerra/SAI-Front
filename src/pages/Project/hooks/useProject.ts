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
            classClient: ''
        },
        mode: 'onChange',
    });

    const handleCreatePracticalTest = (data:LoginProject) => {
        console.log(data);
    };
    return {
        navigate, errors, handleSubmit, control, handleCreatePracticalTest,
    };
};
export default useProject;