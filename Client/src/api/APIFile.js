import axios from 'axios'
import Cookies from "js-cookie"
import { AuthorizationTokenType } from '../publicFunctions'

export const POST = 'POST'
export const GET = 'GET'
export const DELETE = 'DELETE'
export const PATCH = 'PATCH'

const _Request = {
    send: async ({ method, url, params = {}, data = {}, useToken = true }) => {
        try {
            url = _Request.getFullUrl(url, params)

            const response = await axios({
                method: method,
                url: url,
                data: method !== GET ? data : undefined,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: useToken
                        ? `${AuthorizationTokenType} ${GetAccessTokenCookie()}`
                        : '',
                },
            })

            return response
        } catch (error) {
            throw error
        }
    },

    paramsToString: (params) => {
        return new URLSearchParams(params).toString()
    },

    getFullUrl: (url, params) => {
        params = _Request.paramsToString(params)
        return url + `?${params}`
    },
}

export const Request = _Request

export const GetAccessTokenCookie = () => Cookies.get('access-token')
export const SetAccessTokenCookie = (token) => Cookies.set('access-token', token)
export const RemoveAccessTokenCookie = () => Cookies.remove('access-token')