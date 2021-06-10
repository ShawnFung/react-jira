import qs from 'qs'
import * as auth from '../utils/auth-provider'
import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit{
  data?: object,
  token?: string
}

export const http = (endpoint: string, { data, token, ...customConfig}: Config = {}) => {
  let config = {
    method: 'GET',
    headers: {
      Authorization: token? 'Bearer ' + token: '',
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig
  }
  if(config.method.toUpperCase() == 'GET'){
    endpoint += '?' + qs.stringify(data)
  } else{
    config.body = JSON.stringify(data || {})
  }
  return fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if(response.status == 401){
        await auth.logout()
        window.location.reload()
        return Promise.reject({ message: '请重新登录'})
      }
      const data = await response.json()
      if(response.ok){
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

export const useHttp = () => {
  const { user } = useAuth()
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}
