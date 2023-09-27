import { useUserStore } from "@/store/user-store"
export const errorHandle = (err) => {
    console.log(err)
    if (err.response?.data?.message === 'NOT_AUTHENTICATED'
        || err.response?.data?.message === 'TOKEN_IS_NOT_VALID') {
        useUserStore().clear()
    }
}