// React
import React, {useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const ContactView = () => {
  // State
  const {categories,sliders,user,cart} = useContext(AppContext)

  // Actions
  const {getSliders,getCategories} = useContext(AppContext)

  // InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    closeModalCharge()
  }

  useEffect(() => {
    window.scroll(0,0)
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
            <form className="HomeView__Content" >
              <h2>CONTACTO</h2>
              <input type="text" className="Input Title-3" placeholder="Nombre" name="name" />
              <input type="email" className="Input Title-3" placeholder="Email" name="email" />
              <textarea type="text" className="Input Title-3" placeholder="Escriba Aquí su mensaje" name="mensaje" ></textarea>
              <input type="submit" className="Button-Primary Title-3-bold" value="Enviar"/> 
            </form>     
            </div>
          </div>
        </div>
      </PublicContainer>
    </div>
  )
}

export default ContactView