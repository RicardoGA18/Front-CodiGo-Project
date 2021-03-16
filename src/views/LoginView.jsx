import React, {useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import LogNav from '../components/organisms/LogNav'
import AppContext from '../context/App/AppContext'
import {openModalCharge,closeModalCharge} from '../utils/Alerts'
import {useHistory} from 'react-router-dom'

const LoginView = () => {
  const {loginUser,signInWithGoogle,signInWithFacebook} = useContext(AppContext)
  const history = useHistory()

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const [user,setUser] = useState({
    email: '',
    password: ''
  })

  const actualizarInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const manejarSubmit = async e => {
    e.preventDefault()
    openModalCharge()
    const respond = await loginUser(user)
    closeModalCharge()
    if(respond){
      history.push('/')
    }
  }

  const manageGoogleAuth = async () => {
    openModalCharge()
    const response = await signInWithGoogle()
    closeModalCharge()
    if(response){
      history.push('/')
    }
  }

  const manageFacebookAuth = async () => {
    openModalCharge()
    const response = await signInWithFacebook()
    closeModalCharge()
    if(response){
      history.push('/')
    }
  }

  return (
    <div className="LogView">
      <LogNav />
      <div className="LogView__Form">
        <div className="LogForm">
          <div className="LogForm__Contain">
            <button className="Button-Outline Title-3-bold" onClick={manageFacebookAuth}>
              <i className="fab fa-facebook-f"></i>
              Facebook
            </button>
            <button className="Button-Outline Title-3-bold" onClick={manageGoogleAuth}>
              <i className="fab fa-google"></i>
              Google
            </button>
            <div className="LogForm__Break">
              <hr/>
              <p className="Title-3-bold">o</p>
            </div>
            <form className="LogForm__Form" onSubmit={manejarSubmit}>
              <input type="email" className="Input Title-3" placeholder="Correo electrónico" name="email" value={user.email} onChange={(e) => {actualizarInput(e)}} required pattern=".{3,}"/>
              <input type="password" className="Input Title-3" placeholder="Contraseña" name="password" value={user.password} onChange={(e) => {actualizarInput(e)}} required pattern=".{6,}"/>
              <input type="submit" className="Button-Primary Title-3-bold" value="Iniciar Sesión"/>
            </form>
            <div className="LogForm__Link">
              <Link to="/recuperar-contrasenia">
                <p className="Paragraph">¿Olvidaste tu Contraseña?</p>
              </Link>
            </div>
          </div>
          <div className="LogForm__Footer">
            <p className="Title-4-bold">¿Aún no tienes cuenta?</p>
            <Link to="/registro">
              <button className="Button-Outline Title-3-bold">Regístrate</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginView