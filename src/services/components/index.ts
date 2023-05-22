import axios from "axios"

export const getComponents = async() => {
    const response = await axios.get('/createComponente')
    return response.data
}