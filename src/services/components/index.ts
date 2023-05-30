import axios from "axios"
import { IResponseGetComponents } from "./types"

export const getComponents = async() => {
    const response = await axios.get<IResponseGetComponents>('http://localhost:3001/getComponente')
    return response.data
}