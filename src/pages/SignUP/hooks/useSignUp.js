import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

const useSignUP = () => {
  const navigate = useNavigate();

  const {
    handleSubmit, formState: { errors }, control,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      group: '',
    },
    mode: 'onChange',
  });

  const HandleCreateNewUser = (data) => {
    console.log(data);
  };
  return {
    navigate, errors, handleSubmit, control, HandleCreateNewUser,
  };
};
export default useSignUP;