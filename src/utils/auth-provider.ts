import { User } from "../pages/project-list/search-panel";

const apiUrl = process.env.REACT_APP_API_URL
const tokenKey = '_JIRA_USER_TOKEN_'

export interface AuthForm {
  username: string,
  password: string
}

export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(tokenKey, user.token)
  return user
}

export const login = (data: AuthForm) => {
  return fetch(apiUrl + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (res) => {
    if(res.ok){
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(data)
    }
  })
}

export const register = (data: AuthForm) => {
  return fetch(apiUrl + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (res) => {
    if(res.ok){
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(data)
    }
  })
}

export const logout = async () => {
  window.localStorage.removeItem(tokenKey)
  return null
}
