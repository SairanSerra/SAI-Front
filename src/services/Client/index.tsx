import apiSai from "../api/apiSai"
import { IRequestCreateClient, IResposeGetClient } from "./types"

export const deleteClient = async(idClient: number) => 
{
    const params = {
        id: idClient
    }
    const response = await apiSai.delete('/client/destroy', {params})
    return response.data
}

export const getAllClient = async() => 
{
    const response = await apiSai.get<IResposeGetClient>('/client/get-all')
    console.log(response.data)
    return response.data
}

export const createClient = async(data: IRequestCreateClient) => 
{
    const response = await apiSai.post('/client/create', data)
    return response.data
}