import { useQuery } from 'react-query';
import { getComponents } from '../../../services/components';
import { useNavigate } from 'react-router-dom';
const useComponents = () => {
    const {data, isLoading, isError} = useQuery(['getComponents', ], () => getComponents(), {
        initialData:{
            recordset: [],
            recordsets:[],
            rowsAffected: [0],
           
        }
    })

    console.log(data)
    console.log(isLoading)
    console.log(isError)
    const navigate = useNavigate();

    return { data, isLoading ,navigate}
}

export default useComponents;