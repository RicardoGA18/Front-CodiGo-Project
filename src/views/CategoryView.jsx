// React
import React,{useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import ProductBox from '../components/organisms/ProductBox'

// Utils
import {openModalCharge,closeModalCharge,errorAlert} from '../utils/Alerts'

//Temp
import products from '../utils/temp/JsonProducts'

const CategoryView = () => {
  // State
  const {categories,sliders,error,user,cart} = useContext(AppContext)

  // Actions
  const {getSliders,getCategories,cleanError} = useContext(AppContext)

  //InitView
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
    <div className="CategoryView">
      <PublicContainer
        view={'products'}
        categories={categories}
        user={user}
        cart={cart}
        sliders={sliders}
      >
        <div className="CategoryView__Container">
          <ProductBox 
            products={products}
          />
        </div>
      </PublicContainer>
    </div>
  )
}

export default CategoryView