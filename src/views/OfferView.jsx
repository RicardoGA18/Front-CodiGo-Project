// React
import React,{useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import ProductBox from '../components/organisms/ProductBox'

// Utils
import { openModalCharge , closeModalCharge } from '../utils/Alerts'

const OfferView = () => {
  // State
  const { user , cart , categories , sliders , offerProducts } = useContext(AppContext)

  // Actions
  const { getSliders , getCategories , getOfferProducts } = useContext(AppContext)

  // InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    await getOfferProducts()
    closeModalCharge()
  }

  useEffect(() => {
    window.scroll(0,0)
    initView()
  },[])

  return (
    <div className="CategoryView">
      <PublicContainer
        view={"products"}
        categories={categories}
        user={user}
        cart={cart}
        sliders={sliders}
      >
        <div className="CategoryView__Container">
          <ProductBox 
            categoryName={'Ofertas'}
            products={offerProducts}
          />
        </div>
      </PublicContainer>
    </div>
  )
}

export default OfferView