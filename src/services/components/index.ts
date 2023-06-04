import apiSai from "../api/apiSai"
import { IResponseGetComponents } from "./types"

export const getComponents = async() => {
    const response = await apiSai.get<IResponseGetComponents>('/components/get-all')
    console.log(response.data)
    return response.data
}

export const deleteComponent = async(idComponent:number) => {
    const params = {
        id: idComponent
    }
    const response = await apiSai.delete('/components/destroy', {params})
    console.log(response.data)
    return response.data
}