import axios from "axios"
import { errorHandle } from './error'

export const googleLogin = async (data) => {
    try {
        const res = await axios.post('/api/google-login', {
            token: data.credential
        })
        return res.data
    } catch (error) {
        errorHandle(error)
    }

}

export const logout = async () => {
    try {
        const { data } = await axios.get('/api/logout')
        console.log(data)
    } catch (error) {
        errorHandle(error)
    }
}



