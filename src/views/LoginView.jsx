import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import LogNav from '../components/organisms/LogNav'

const LoginView = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <div className="LogView">
      <LogNav />
      <div className="LogView__Form">
        <div className="LogForm">
          <div className="LogForm__Contain">
            <button className="Button-Outline Title-3-bold">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </button>
            <button className="Button-Outline Title-3-bold">
              <i className="fab fa-google"></i>
              Google
            </button>
            <div className="LogForm__Break">
              <hr/>
              <p className="Title-3-bold">o</p>
            </div>
            <form className="LogForm__Form">
              <input type="email" className="Input Title-3" placeholder="Correo electrónico"/>
              <input type="password" className="Input Title-3" placeholder="Contraseña"/>
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