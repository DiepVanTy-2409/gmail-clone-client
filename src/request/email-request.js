import axios from "axios";
import { errorHandle } from "./error";

export const sendEmail = async (email) => {
    try {
        const { data } = await axios.post('/email', email)
        return data
    } catch (error) {
        errorHandle(error)
    }
}

export const getEmailById = async (id) => {
    try {
        const { data } = await axios.get(`/email/${id}`)
        return data
    } catch (error) {
        errorHandle(error)
    }
}

export const getEmailReceived = async () => {
    try {
        const { data } = await axios.get('/email/received')
        return data
    } catch (error) {
        errorHandle(error)
    }
}

export const getEmailSent = async () => {
    try {
        const { data } = await axios.get('/email/sent')
        return data
    } catch (error) {
        errorHandle(error)
    }
}