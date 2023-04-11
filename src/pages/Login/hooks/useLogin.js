import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const useLogin = () => {
  const navigate = useNavigate();

  const {
    handleSubmit, formState: { errors }, control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const HandleLogin = (data) => {
    console.log(data);
    navigate('/project');
  };
  return {
    navigate, errors, handleSubmit, control, HandleLogin,
  };
};
export default useLogin;