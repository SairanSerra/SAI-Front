import { useNavigate } from 'react-router';

const useSignUP = () => {
  const navigate = useNavigate();

  return { navigate };
};
export default useSignUP;