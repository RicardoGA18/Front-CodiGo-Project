// React
import React, {useEffect} from 'react'
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'
import setCartLS from '../context/utils/setCartLS'

const SuccessView = () => {
  // State
  const {categories,sliders,user,cart} = useContext(AppContext)

  // Actions
  const {getSliders,getCategories} = useContext(AppContext)
  const history = useHistory()

  // InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    closeModalCharge()
  }

  useEffect(() => {
    window.scroll(0,0)
    setCartLS([])
    initView()
  }, [])
  // End InitView

  return (
    <div className="HomeView">
      <PublicContainer
        view={'home'}
        categories={categories}
        user={user}
        cart={cart}
        sliders={sliders}
      >
        <div className="HomeView__Content">
          <div className="l-container">
            <div className="l-contain">
              <div className="Payment">
                <div className="Payment__Container">
                  <div className="Payment__Icon">
                    <i className="fas fa-check-circle success"></i>
                  </div>
                  <p className="Title-1">Pago Exitoso!</p>
                  <p className="Paragraph">Podrás visualizar los datos de la compra en tu perfil</p>
                  <div className="Payment__Button">
                    <button className="Button-Primary Title-3" onClick={() => {history.push('/')}}>Volver al inicio</button>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </PublicContainer>
    </div>
  )
}

export default SuccessView
