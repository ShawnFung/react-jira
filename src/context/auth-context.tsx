import React, { useState } from "react";
import * as auth from '../utils/auth-provider'
import { User } from "../pages/project-list/search-panel";

interface AuthContextState {
  user: User|null,
  login: (form: auth.AuthForm) => any;
  register: (form: auth.AuthForm) => any;
  logout: () => any;
}
const AuthContext = React.createContext<AuthContextState|undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode}) => {
  const [user, setUser] = useState<User|null>(null)
  const login = (form: auth.AuthForm) => auth.login(form).then(user => setUser(user))
  const register = (form: auth.AuthForm) => auth.register(form).then(user => setUser(user))
  const logout = () => auth.logout().then(user => setUser(user))

  return <AuthContext.Provider value={{user, login, register, logout}}>
    { children }
  </AuthContext.Provider>
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if(!context){
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}
