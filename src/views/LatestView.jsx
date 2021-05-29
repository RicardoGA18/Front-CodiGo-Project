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

const LatestView = () => {
  // State
  const { user , cart , categories , sliders , latestProducts } = useContext(AppContext)

  // Actions
  const { getSliders , getCategories , getLatestProducts } = useContext(AppContext)

  // InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    await getLatestProducts()
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
            categoryName={'Lo último'}
            products={latestProducts}
          />
        </div>
      </PublicContainer>
    </div>
  )
}

export default LatestView