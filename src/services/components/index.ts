import { CreateComponent } from "../../pages/Components/Register/hooks/types"
import apiSai from "../api/apiSai"
import { IResponseGetComponents } from "./types"

export const getComponents = async() => {
    const response = await apiSai.get<IResponseGetComponents>('/components/get-all')
    return response.data
}

export const deleteComponent = async(idComponent:number) => {
    const params = {
        id: idComponent
    }
    const response = await apiSai.delete('/components/destroy', {params})
    return response.data
}

export const createComponent = async(data:CreateComponent) => {
    const body = new FormData()
    body.append("partNumber",data.partNumber)
    body.append("name",data.name)
    body.append("description",data.description)
    body.append("model",data.model)
    body.append("maker",data.maker)
    body.append("price",data.price)
    body.append("size",data.size)
    body.append("typeDraft",data.typeDraft)
    body.append("LPP",data.LPP)
    body.append("numberPadronization",data.numberPadronization)
    body.append("imageDocument",data.imageDocument[0])

    const response = await apiSai.post('/components/create', body)

    return response.data
}