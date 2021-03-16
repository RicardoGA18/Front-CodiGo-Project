//React
import React,{useEffect} from 'react'
import {useContext} from 'react'

//Context
import AppContext from '../context/App/AppContext'

//Components
import PublicContainer from '../components/containers/PublicContainer'
import CategoryBox from '../components/organisms/CategoryBox'

//Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const CategoriesView = () => {
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
  //End InitView

  return (
    <div className="CategoriesView">
      <PublicContainer
        view='products'
        categories={categories}
        user={user}
        cart={cart}
        sliders={sliders}
      >
        <div className="CategoriesView__Container">
          <CategoryBox
            categories={categories}
          />
        </div>
      </PublicContainer>
    </div>
  )
}

export default CategoriesView