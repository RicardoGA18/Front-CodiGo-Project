// React Context
import React, {useReducer} from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'

// Types
import {GET_CATEGORIES,GET_SLIDERS,SET_ERROR} from '../types'

// Fetch Functions
import fetchSliders from '../utils/fetchSliders'
import fetchCategories from '../utils/fetchCategories'

const AppState = (props) => {
  const INITIAL_STATE = {
    categories: [],
    sliders: [],
    error: null,
    user: null,
    cart: [],
  }

  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)

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

  return (
    <AppContext.Provider value={{ 
      categories: state.categories,
      sliders: state.sliders,
      error: state.error,
      user: state.user,
      cart: state.cart,
      getCategories,
      getSliders,
      cleanError,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState

