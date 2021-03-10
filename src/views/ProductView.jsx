// React
import React,{useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import Product from '../components/organisms/Product'
import Subtitle from '../components/molecules/Subtitle'

// Utils
import {openModalCharge,closeModalCharge,errorAlert} from '../utils/Alerts'

// Temp
import product from '../utils/temp/JsonProduct'

const ProductView = () => {
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
  },[error])

  useEffect(()=>{
    window.scroll(0,0)
    initView()
  },[])
  // End InitView

  return (
    <div className="ProductView">
      <PublicContainer
        view={'products'}
        categories={categories}
        user={user}
        cart={cart}
        sliders={sliders}
      >
        <div className="ProductView__Container">
          <div className="l-container">
            <div className="l-contain">
              <Subtitle 
                name={product.name}
              />
            </div>
          </div>
          <Product 
            id={product.id}
            price={product.price}
            stock={product.stock}
            slides={product.slides}
            description={product.description}
            details={product.details}
            discount={product.discount}
          />
        </div>
      </PublicContainer>
    </div>
  )
}

export default ProductView