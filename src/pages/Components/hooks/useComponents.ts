import { useMutation, useQuery } from 'react-query';
import { getComponents, deleteComponent } from '../../../services/components';
import { useNavigate } from 'react-router-dom';
import Toast from '../../../components/Toast';
const useComponents = () => {

    const {data, isLoading, refetch} = useQuery(['getComponents'], () => getComponents(), {
        initialData: {
            content:{
                data: [],
                meta: {}
            }
        },
        onError: () => {
            Toast('ERROR', 'Falha ao carregar lista de componentes')
        },

    })

    const handleDeleteComponent = useMutation(['getdeleteComponent'], (idComponent: number) =>deleteComponent(idComponent),{
        onSuccess: () => {
            Toast('SUCCESS', 'Componente excluído com sucesso')
            refetch()
        },
        onError:() => {
            Toast('ERROR', 'Falha ao carregar imagem do documento')
        }
    })
    const navigate = useNavigate();

    return { data, isLoading ,navigate, handleDeleteComponent}
}

export default useComponents;