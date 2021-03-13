import {LOCAL_KEY} from '../types'

const getCartLS = () => {
  const cart = window.localStorage.getItem(LOCAL_KEY)
  if(cart){
    return JSON.parse(cart)
  }else{
    window.localStorage.setItem(LOCAL_KEY,JSON.stringify([]))
    return []
  }
}

export default getCartLS