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
import {openModalCharge,closeModalCharge,errorAlert} from '../utils/Alerts'

// Temp
import offerProducts from '../utils/temp/JsonOffers'

const HomeView = () => {
  // State
  const {categories,sliders,error,user,cart} = useContext(AppContext)

  // Actions
  const {getSliders,getCategories,cleanError} = useContext(AppContext)

  // InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    closeModalCharge()
  }

  useEffect(async () => {
    if(error){
      await errorAlert(error)
      cleanError()
    }
  }, [error])

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