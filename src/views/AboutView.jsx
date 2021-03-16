// React
import React, {useEffect} from 'react'
import {useContext} from 'react'
import {useParams} from 'react-router-dom'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import Who from '../components/atoms/Who'
import QA from '../components/atoms/QA'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const AboutView = () => {
  // State
  const {categories,sliders,user,cart} = useContext(AppContext)
  const {info} = useParams()

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
      default:
        return <h1 className="Title-2-bold">En desarrollo</h1>
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