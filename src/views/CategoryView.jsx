// React
import React,{useEffect} from 'react'
import {useContext} from 'react'
import {useParams} from 'react-router-dom'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import ProductBox from '../components/organisms/ProductBox'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const CategoryView = () => {
  // State
  const {categories,sliders,user,cart,products} = useContext(AppContext)

  // Actions
  const {getSliders,getCategories,getProducts} = useContext(AppContext)

  // Params
  const {id} = useParams()

  //InitView
  const initView = async () => {
    openModalCharge()
    await getSliders()
    await getCategories()
    await getProducts(id)
    closeModalCharge()
  }

  useEffect(()=>{
    window.scroll(0,0)
    initView()
  },[])

  useEffect( async () => {
    openModalCharge()
    await getProducts(id)
    closeModalCharge()
  },[id])
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