// React Context
import React, {useReducer} from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'

// Types
import {GET_CATEGORIES,GET_SLIDERS} from '../types'

// Fetch Functions
import fetchSliders from '../utils/fetchSliders'
import fetchCategories from '../utils/fetchCategories'

const AppState = (props) => {
  const INITIAL_STATE = {
    categories: [],
    sliders: [],
  }

  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)
  
  // CATEGORIES
  const getCategories = async () => {
    let categories = await fetchCategories()
    dispatch({
      type: GET_CATEGORIES,
      payload: categories
    })
  }
  
  // SLIDERS
  const getSliders = async () => {
    let sliders = await fetchSliders()
    dispatch({
      type: GET_SLIDERS,
      payload: sliders
    })
  }

  return (
    <AppContext.Provider value={{ 
      categories: state.categories,
      sliders: state.sliders,
      getCategories,
      getSliders,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState

