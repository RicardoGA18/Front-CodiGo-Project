import {GET_CATEGORIES,GET_SLIDERS} from '../types'

export default (state,action) => {
  const {payload , type} = action
  switch(type){
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
    default:
      return state
  }
}