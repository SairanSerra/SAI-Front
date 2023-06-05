import { useForm } from "react-hook-form";
import { CreateComponent } from "./types";
import { useMutation } from "react-query";
import { createComponent } from "../../../../services/components";
import { useNavigate } from "react-router-dom";
import Toast from "../../../../components/Toast";
import { removeInputFormatMoney } from "../../../../Utils/RemoveMaskMoney";
import { sendFormat } from "../../../../Utils/SendFormat";

const useRegisterComponents = () => {
    const {
        handleSubmit, formState: { errors }, control,setValue
    } = useForm<CreateComponent>({
        defaultValues: {
            partNumber: '',
            name: '',
            description: '',
            model: '',
            maker: '',
            price: '',
            size: '',
            typeDraft: '',
            LPP: '',
            numberPadronization: '',
            imageDocument: undefined
        },
        mode: 'onChange',
    });
    const navigate = useNavigate()

    const {mutate} = useMutation('createComponent', (data:CreateComponent) => createComponent(data), {

        onSuccess: () => {
            navigate(-1)
            Toast("SUCCESS", "Componente cadastrado com sucesso")
        },
        onError: () => {
            Toast("ERROR", "Falha ao cadastrar componente")
        }
    })

    const HandleCreateComponent = (data:CreateComponent) => {
        mutate({...data, 
            price: String(removeInputFormatMoney(data.price)), 
            partNumber: sendFormat(data.partNumber),
            LPP: sendFormat(data.LPP),
            numberPadronization: sendFormat(data.numberPadronization),
            imageDocument: data.imageDocument

        })
    };
    return {HandleCreateComponent, errors, control, handleSubmit, setValue}
}

export default useRegisterComponents;