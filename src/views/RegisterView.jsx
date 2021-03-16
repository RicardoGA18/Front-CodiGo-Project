import React,{useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import LogNav from '../components/organisms/LogNav'
import AppContext from '../context/App/AppContext'
import {openModalCharge,closeModalCharge} from '../utils/Alerts'
import {useHistory} from 'react-router-dom'

const RegisterView = () => {
  const {registerUser} = useContext(AppContext)
  const history = useHistory()

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const [user,setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    pass1: '',
    pass2: ''
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
    const respond = await registerUser(user)
    closeModalCharge()
    if(respond){
      history.push('/')
    }
  }

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
            <form className="LogForm__Form" onSubmit={manejarSubmit}>
              <input type="text" className="Input Title-3" placeholder="Nombre" name="name" value={user.name} onChange={(e) => {actualizarInput(e)}} required pattern="[A-Za-z]{2,}"/>
              <input type="text" className="Input Title-3" placeholder="Apellido" name="lastName" value={user.lastName} onChange={(e) => {actualizarInput(e)}} required pattern="[A-Za-z]{2,}"/>
              <input type="email" className="Input Title-3" placeholder="Email" name="email" value={user.email} onChange={(e) => {actualizarInput(e)}} required pattern=".{3,}"/>
              <input type="password" className="Input Title-3" placeholder="Contraseña" name="pass1" value={user.pass1} onChange={(e) => {actualizarInput(e)}} pattern=".{6,}" required/>
              <input type="password" className="Input Title-3" placeholder="Repetir Contraseña" name="pass2" value={user.pass2} onChange={(e) => {actualizarInput(e)}} pattern=".{6,}" required/>
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