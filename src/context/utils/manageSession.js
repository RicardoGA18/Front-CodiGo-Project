import { ACCESS_TOKEN , COMPUTER_STORE_USER } from '../types'

export const setUserLS = user => {
  window.localStorage.setItem(COMPUTER_STORE_USER,JSON.stringify(user))
}

export const getUserLS = () => {
  const user = window.localStorage.getItem(COMPUTER_STORE_USER)
  if(user){
    return JSON.parse(user)
  }
  return null
}

export const setToken = token => {
  window.localStorage.setItem(ACCESS_TOKEN,token)
}

export const getToken = () => {
  const token = window.localStorage.getItem(ACCESS_TOKEN)
  return token
}