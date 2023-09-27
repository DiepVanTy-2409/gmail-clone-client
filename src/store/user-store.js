import { defineStore } from 'pinia'
import axios from 'axios'
import * as EmailAPI from '@/request/email-request'
import { googleLogin } from '../request/auth-request';


axios.defaults.baseURL = 'http://localhost:4001'
axios.defaults.withCredentials = true
axios.defaults.credential = 'include'

export const useUserStore = defineStore('user', {
    state: () => ({
        sub: '',
        email: '',
        picture: '',
        firstName: '',
        lastName: '',
        emailsReceived: [],
        emailsSent: []
    }),
    actions: {
        async getEmailReceived() {
            console.log('REFRESH')
            const data = await EmailAPI.getEmailReceived()
            this.$state.emailsReceived = data
        },
        async getEmailSent() {
            const data = await EmailAPI.getEmailSent()
            this.$state.emailsSent = data
        },
        sendEmail(email) {
            this.$state.emailsSent.unshift(email)
        },
        async getUserFromGoogle(data) {
            let googleData = await googleLogin(data)
            this.$state.sub = googleData.sub
            this.$state.email = googleData.email
            this.$state.picture = googleData.picture
            this.$state.firstName = googleData.given_name
            this.$state.lastName = googleData.family_name
            // this.$state.emails = res.data.emails
        },
        clear() {
            this.$state.sub = ''
            this.$state.email = ''
            this.$state.picture = ''
            this.$state.firstName = ''
            this.$state.lastName = ''
            this.$state.emailsReceived = []
            this.$state.emailsSent = []
        },
        getNewEmail(email) {
            // console.log(Date.now())
            const _emails = [email, ...this.$state.emailsReceived]
            this.$state.emailsReceived = _emails
        },
        viewedEmail(id) { 
            const __emails = this.$state.emailsReceived.map(email => {
                if (email?._id === id) {
                    email.hasViewed = true
                }
                return email
            })
            this.$state.emailsReceived = __emails
        }
    },

    persist: true
})