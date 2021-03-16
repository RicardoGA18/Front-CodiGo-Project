import React,{useContext,useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'

// Context
import AppContext from '../context/App/AppContext'

// Components
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'
import Subtitle from '../components/molecules/Subtitle'
import Profile from '../components/organisms/Profile'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const AccountView = () => {
  // State
  const {categories,user,cart} = useContext(AppContext)
  const history = useHistory()

  // Actions
  const {getCategories,signOut} = useContext(AppContext)

  // InitView
  const initView = async () => {
    openModalCharge()
    await getCategories()
    closeModalCharge()
  }

  useEffect(() => {
    window.scroll(0,0)
    initView()
  },[])
  // End InitView

  const [content,setContent] = useState('profile') 

  const setContentSwitch = () => {
    switch (content){
      case 'profile':
        return <Profile />
    }
  }

  const manageDropbox = e => {
    const dropboxProfile = document.getElementById('dropboxProfile')
    if(e.target.checked){
      dropboxProfile.style.maxHeight = '0'
    }else{
      dropboxProfile.style.maxHeight = '160px'
    }
  }

  const manageSignOut = async () => {
    openModalCharge()
    const response = await signOut()
    closeModalCharge()
    if(response){
      history.push('/')
    }
  }

  return (
    <div className="AccountView">
      <StaticHead />
      <Head 
        view="perfil"
        categories={categories}
        user={user}
        cart={cart}
      />
      <div className="l-container">
        <div className="l-contain AccountView__Content">
          <Subtitle 
            name={`Bienvenid@ ${user.username}`}
          />
          <div className="AccountView__Options">
            <div className="AccountView__Options-Content">
              <div className="AccountView__Options-Title">
                <p className="Title-3-bold">Mi Cuenta</p>
                <div className="Checkbox">
                  <input type="checkbox" onChange={manageDropbox}/>
                  <i className="fas fa-plus"></i>
                  <i className="fas fa-minus"></i>
                </div>
              </div>
              <div id="dropboxProfile">
                <p className="Paragraph">Información Personal</p>
                <p className="Paragraph">Cambiar Contraseña</p>
                <p className="Paragraph">Historial de pedidos</p>
                <p className="Paragraph" onClick={() => {manageSignOut()}}>Cerrar Sesión <i className="fas fa-sign-out-alt"></i></p>
              </div>
            </div>
          </div>
          {setContentSwitch()}
        </div>
      </div>
    </div>
  )
}

export default AccountView