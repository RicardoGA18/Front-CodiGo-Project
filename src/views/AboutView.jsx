// React
import React, {useEffect} from 'react'
import {useContext} from 'react'
import {useParams,useHistory} from 'react-router-dom'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import Who from '../components/atoms/Who'
import QA from '../components/atoms/QA'
import Advantaje from '../components/atoms/Advantaje'
import HowBuy from '../components/atoms/HowBuy'
import Stores from '../components/atoms/Stores'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const AboutView = () => {
  // State
  const {categories,sliders,user,cart} = useContext(AppContext)
  const {info} = useParams()
  const history = useHistory()

  // Actions
  const {getSliders,getCategories} = useContext(AppContext)

  // InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    closeModalCharge()
  }

  // SetContentHTML
  const setContentHTML = () => {
    switch(info){
      case 'quienes-somos':
        return <Who />
      case 'preguntas-frecuentes':
        return <QA />
      case 'como-comprar':
        return <HowBuy />
      case 'nuestras-ventajas':
        return <Advantaje />
      case 'nuestras-tiendas':
        return <Stores />
      default:
        history.push('/')
        return <></>
    }
  }

  useEffect(() => {
    window.scroll(0,0)
    initView()
  },[])

  return (
    <div className="AboutView">
      <PublicContainer
        view={'about'}
        categories={categories}
        user={user}
        cart={cart}
        sliders={sliders}
      >
        <div className="AboutView__Content l-container">
          <div className="l-contain">
            {setContentHTML()}
          </div>
        </div>
      </PublicContainer>
    </div>
  )
}

export default AboutView