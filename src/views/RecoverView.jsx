import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import LogNav from '../components/organisms/LogNav'

const RecoverView = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <div className="LogView">
      <LogNav />
      <div className="LogView__Form">
        <div className="LogForm">
          <div className="LogForm__Contain">
            <form className="LogForm__Form">
              <input type="email" className="Input Title-3" placeholder="Email"/>
              <input type="submit" className="Button-Primary Title-3-bold" value="Recuperar Contraseña"/>
            </form>
            <div className="LogForm__Link">
              <Link to="/iniciar-sesion">
                <p className="Paragraph">¿Ya tienes una cuenta? Iniciar Sesión</p>
              </Link>
            </div>
            <div className="LogForm__Link">
              <Link to="/registro">
                <p className="Paragraph">¿Aún no tienes una cuenta? Regístrate</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecoverView