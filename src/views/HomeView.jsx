// React
import React, {useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import CategoryList from '../components/organisms/CategoryList'
import Brands from '../components/organisms/Brands'
import Advantage from '../components/organisms/Advantage'
import ProductList from '../components/organisms/ProductList'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const HomeView = () => {
  // State
  const {categories,sliders,user,cart,offerProducts} = useContext(AppContext)

  // Actions
  const {getSliders,getCategories,getOfferProducts} = useContext(AppContext)

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
          <CategoryList
            categories={categories}
          />
          <ProductList 
            listName="OFERTAS"
            seeAll="/ofertas"
            products={offerProducts}
          />
          <Brands />
          <Advantage />
        </div>
      </PublicContainer>
    </div>
  )
}

export default HomeView