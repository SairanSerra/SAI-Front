import apiSai from "../api/apiSai"
import { IResponseGetComponents } from "./types"

export const getComponents = async() => {
    const response = await apiSai.get<IResponseGetComponents[]>('/components/get-all')
    console.log(response.data)
    return response.data
}