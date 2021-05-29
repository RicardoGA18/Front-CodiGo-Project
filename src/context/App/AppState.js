// React Context
import React, {useReducer} from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'

// Types
import {CREATE_PREFERENCE,GET_CATEGORIES,GET_SLIDERS,SET_ERROR,GET_OFFERS,GET_PRODUCTS,GET_PRODUCT,ADD_CART,SET_USER,GET_LATEST} from '../types'

// Fetch Functions
import fetchSliders from '../utils/fetchSliders'
import fetchCategories from '../utils/fetchCategories'
import fetchOffers from '../utils/fetchOffers'
import fetchLatest from '../utils/fetchLatest'
import fetchProducts from '../utils/fetchProducts'
import fetchProduct from '../utils/fetchProduct'
import getCartLS from '../utils/getCartLS'
import addUser from '../utils/addUser'
import logUser from '../utils/logUser'
import setNewUser from '../utils/setNewUser'
import signOutUser from '../utils/signOutUser'
import { getUserLS } from '../utils/manageSession'
import createPreference from '../utils/createPreference'

const AppState = (props) => {
  const INITIAL_STATE = {
    categories: [],
    sliders: [],
    offerProducts: [],
    products: [],
    latestProducts: [],
    product: null,
    error: null,
    user: getUserLS(),
    cart: getCartLS(),
  }

  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  // Payment
  const getPreference = async (preference) => {
    try {
      const { url } = await createPreference(preference)
      return url
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
      return null
    }
  }

  // USER
  const signOut = () => {
    const response = signOutUser()
    dispatch({
      type: SET_USER,
      payload: response
    })
    return true
  }

  const updateUser = async user => {
    const respond = await setNewUser(user)
    if(typeof respond === 'object'){
      dispatch({
        type: SET_USER,
        payload: respond
      })
      return respond
    }else if(typeof respond === 'string'){
      dispatch({
        type: SET_ERROR,
        payload: respond
      })
      return null
    }else{
      console.log('Comportamiento inesperado en AppState/updateUser')
      return null
    }
  }

  const reviewUser = respond => {
    dispatch({
      type: SET_USER,
      payload: respond
    })
  }

  const loginUser = async (user) => {
    const respond = await logUser(user)
    if(respond.error && !respond.user){
      dispatch({
        type: SET_ERROR,
        payload: respond.error
      })
      return null
    }else if(respond.user && !respond.error){
      dispatch({
        type: SET_USER,
        payload: respond.user
      })
      return true
    }else{
      console.log('Patrón no esperado en AppState/loginUser!')
      return null
    }
  }

  const registerUser = async (user) => {
    const respond = await addUser(user)
    if(respond.error && !respond.user){
      dispatch({
        type: SET_ERROR,
        payload: respond.error
      })
      return null
    }else if(respond.user && !respond.error){
      dispatch({
        type: SET_USER,
        payload: respond.user
      })
      return true
    }else{
      console.log('Patrón no esperado en AppState/registerUser!')
      return null
    }
  }

  // CART
  const addCartItem = async (id,amount) => {
    try {
      const product = await fetchProduct(id)
      product.amount = amount
      dispatch({
        type: ADD_CART,
        payload: product
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  // PRODUCTS
  const getProduct = async (id) => {
    try {
      const product = await fetchProduct(id)
      dispatch({
        type: GET_PRODUCT,
        payload: product
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  const getProducts = async (productId) => {
    try {
      const products = await fetchProducts(productId)
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  const getOfferProducts = async () => {
    try {
      let offers = await fetchOffers()
      dispatch({
        type: GET_OFFERS,
        payload: offers 
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  const getLatestProducts = async () => {
    try {
      const latest = await fetchLatest()
      dispatch({
        type: GET_LATEST,
        payload: latest
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  // CATEGORIES
  const getCategories = async () => {
    try{
      let categories = await fetchCategories()
      dispatch({
        type: GET_CATEGORIES,
        payload: categories
      })
    }catch(error){
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  // SLIDERS
  const getSliders = async () => {
    try{
      let sliders = await fetchSliders()
      dispatch({
        type: GET_SLIDERS,
        payload: sliders
      })
    }catch(error){
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  // ERROR
  const cleanError = () => {
    dispatch({
      type: SET_ERROR,
      payload: null
    })
  }

  const setError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: error
    })
  }

  return (
    <AppContext.Provider value={{ 
      categories: state.categories,
      sliders: state.sliders,
      error: state.error,
      user: state.user,
      cart: state.cart,
      offerProducts: state.offerProducts,
      latestProducts: state.latestProducts,
      products: state.products,
      product: state.product,
      addCartItem,
      getProduct,
      getProducts,
      getOfferProducts,
      getLatestProducts,
      getCategories,
      getSliders,
      cleanError,
      setError,
      registerUser,
      loginUser,
      reviewUser,
      updateUser,
      signOut,
      getPreference,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState

