import axios from "axios"

const urlAxios = axios.create({
    baseURL: "http://localhost:3004/"
})

export default urlAxios