import {LOCAL_KEY} from '../types'

const setCartLS = product => {
  window.localStorage.setItem(LOCAL_KEY,JSON.stringify(product))
}

export default setCartLS