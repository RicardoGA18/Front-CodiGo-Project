import React,{useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'
import SubTitle from '../components/molecules/Subtitle'
import Summary from '../components/molecules/Summary'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts' 

const PayView = () => {
  // State
  const {categories,user,cart} = useContext(AppContext)

  // Actions
  const {getCategories} = useContext(AppContext)

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
  //End InitView

  return (
    <div className="PayView">
      <StaticHead />
      <Head 
        view='pasarela'
        categories={categories}
        user={user}
        cart={cart}
      />
      <div className="l-container">
        <div className="l-contain PayView__Content">
          <SubTitle 
            name="Pasarela de Pago"
          />
          <form className="PayView__Form">
            <p className="Title-3-bold">Datos Personales</p>
            <div className="PayView__Form-Personal">
              <input type="text" className="Input" placeholder="Documento de Identidad"/>
              <input type="email" className="Input" placeholder="Correo electrónico"/>
            </div>
            <p className="Title-3-bold">Ingresa la información de tu tarjeta</p>
            <div className="PayView__Form-Card">
              <input type="text" className="Input" placeholder="Nombre del titular"/>
              <input type="text" className="Input" placeholder="Número de la tarjeta"/>
              <div className="is-cardDate">
                <input type="text" className="Input" placeholder="Mes"/>
                <input type="text" className="Input" placeholder="Año"/>
                <input type="text" className="Input" placeholder="CVC/CVV"/>
              </div>
            </div>
            <div className="PayView__Form-Submit">
              <input type="submit" value="Finalizar compra" className="Button-Primary Title-3-bold"/>
            </div>
          </form>
          <Summary 
            cart={cart}
            view={'pasarela'}
          />
        </div>
      </div>
    </div>
  )
}

export default PayView