import axios from "axios";

const apiSai = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_SAI
})

export default apiSai;