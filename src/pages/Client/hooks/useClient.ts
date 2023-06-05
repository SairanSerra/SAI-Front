import { useNavigate } from 'react-router';
import { useMutation, useQuery } from 'react-query';
import { deleteClient, getAllClient } from '../../../services/Client';
import Toast from '../../../components/Toast';

const useClient = () => {
    const navigate = useNavigate();
    const mocHeader = ['ID','Nome','Tipo', 'Data de criação', ''];

    const {data,refetch, isLoading} = useQuery('get-all-clients', () => getAllClient(), {
        initialData: {
            content: []
        }
    })

    const handleDeleteClient = useMutation('delete-client', (idClient: number) => deleteClient(idClient), {
        onSuccess:() => {
            Toast('SUCCESS', 'Cliente Excluído com sucesso')
            refetch()
        },
        onError: () => {
            Toast('ERROR', 'Falha ao excluir cliente')
        }
    })

    return {
        navigate, handleDeleteClient, mocHeader,data, isLoading
    };
};
export default useClient;