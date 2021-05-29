import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import AppContext from '../context/App/AppContext'

const PrivateRoute = ({component,...options}) => {
  const {user} = useContext(AppContext)

  if(user){
    return <Route {...options} component={component} />
  }else{
    return <Redirect to="/iniciar-sesion" />
  }
}

export default PrivateRoute