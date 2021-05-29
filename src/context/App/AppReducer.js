import {GET_CATEGORIES,GET_SLIDERS,SET_ERROR,GET_OFFERS,GET_PRODUCTS, GET_PRODUCT,ADD_CART,SET_USER,GET_LATEST} from '../types'
import setCartLS from '../utils/setCartLS'

export default (state,action) => {
  const {payload , type} = action
  switch(type){
    case SET_USER:
      return {
        ...state,
        user: payload
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    case GET_SLIDERS:
      return {
        ...state,
        sliders: payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: payload
      }
    case GET_OFFERS:
      return {
        ...state,
        offerProducts: payload
      }
    case GET_LATEST:
      return {
        ...state,
        latestProducts: payload
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    case GET_PRODUCT:
      return {
        ...state,
        product: payload
      }
    case ADD_CART:
      const sameProducts = state.cart.filter(product => product.id === payload.id)
      if(sameProducts.length){
        let newCart
        const productNumber = sameProducts.reduce((accumaltor,product) => accumaltor + product.amount, 0)
        if((productNumber + payload.amount) > 0){
          newCart = state.cart.map(product => {
            if(product.id === payload.id){
              return {
                ...product,
                amount: product.amount + payload.amount 
              }
            }else{
              return product
            }
          })
        }else{
          newCart = state.cart.filter(product => product.id !== payload.id)
        }
        setCartLS(newCart)
        return {
          ...state,
          cart: newCart
        }
      }else{ 
        setCartLS([...state.cart,payload])
        return {
          ...state,
          cart: [...state.cart,payload]
        }
      }
    default:
      return state
  }
}