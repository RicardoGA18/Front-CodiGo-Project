import React from 'react'
import LogNav from '../components/organisms/LogNav'
import Login from '../components/organisms/Login'

const LoginView = () => {
  return (
    <div className="LoginView">
      <LogNav />
      <div className="LoginView__Form">
        <Login />
      </div>
    </div>
  )
}

export default LoginView