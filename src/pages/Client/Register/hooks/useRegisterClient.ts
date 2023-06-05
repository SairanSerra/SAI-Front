import { createClient } from './../../../../services/Client/index';
import { useForm } from "react-hook-form";
import { FormClient } from "./type";
import { useMutation } from "react-query";
import Toast from '../../../../components/Toast';
import { useNavigate } from 'react-router-dom';

const useRegisterClient = () => {

    const navigate = useNavigate()
    const {control, formState:{errors}, handleSubmit, reset } = useForm<FormClient>({
        defaultValues: {
            name: '',
            type: ''
        },
        reValidateMode: "onChange"
    })
    const {mutate} = useMutation('create-client', (data:FormClient) => createClient(data), {
        onSuccess: () => {
            navigate(-1)
            Toast('SUCCESS', "Cliente cadastrado com sucesso")
            reset()
        },
        onError: () => {
            Toast('ERROR', "Falha ao cadastrar cliente")
        }
    })
    const HandleCreateClient = (data: FormClient) => {
        mutate(data)
    }

    return{control, errors, handleSubmit,HandleCreateClient, navigate}
}
export default useRegisterClient;