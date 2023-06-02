import { useQuery } from 'react-query';
import { getComponents } from '../../../services/components';
import { useNavigate } from 'react-router-dom';
const useComponents = () => {
    const {data, isLoading, error} = useQuery(['getComponents', ], () => getComponents(), {

    })

    console.log(data)
    console.log(isLoading)
    console.log(error)
    const navigate = useNavigate();

    return { data, isLoading ,navigate}
}

export default useComponents;