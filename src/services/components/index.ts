import axios from "axios"
import { IResponseGetComponents } from "./types"

export const getComponents = async() => {
    const response = await axios.get<IResponseGetComponents>('/createComponente')
    return response.data
}