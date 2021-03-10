import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import LogNav from '../components/organisms/LogNav'

const RegisterView = () => {
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
              <input type="text" className="Input Title-3" placeholder="Nombre"/>
              <input type="text" className="Input Title-3" placeholder="Apellido"/>
              <input type="email" className="Input Title-3" placeholder="Email"/>
              <input type="password" className="Input Title-3" placeholder="Contraseña"/>
              <input type="password" className="Input Title-3" placeholder="Repetir Contraseña"/>
              <input type="submit" className="Button-Primary Title-3-bold" value="Regístrate"/>
            </form>
          </div>
          <div className="LogForm__Footer">
            <p className="Title-4-bold">¿Ya tienes una cuenta?</p>
            <Link to="/iniciar-sesion">
              <button className="Button-Outline Title-3-bold">Iniciar Sesión</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterView