// React
import React,{useEffect} from 'react'
import {useContext} from 'react'
import {useParams} from 'react-router-dom'

// Context
import AppContext from '../context/App/AppContext'

// Components
import PublicContainer from '../components/containers/PublicContainer'
import Product from '../components/organisms/Product'
import Subtitle from '../components/molecules/Subtitle'
import ProductList from '../components/organisms/ProductList'


// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const ProductView = () => {
   // State
  const {categories,sliders,user,cart,product,products} = useContext(AppContext)

   // Actions
  const {getSliders,getCategories,getProduct,getProducts} = useContext(AppContext)

  // Params
  const {id} = useParams()

  // InitView
  const initView = async () => {
    openModalCharge()
    await getProduct(id)
    await getSliders()
    await getCategories()
    closeModalCharge()
  }

  useEffect(async () => {
    window.scroll(0,0)
    openModalCharge()
    await getProduct(id)
    closeModalCharge()
  },[id])

  useEffect(async ()=>{
    if(product){
      await getProducts(product.category.id)
    }
  },[product])

  useEffect(()=>{
    window.scroll(0,0)
    initView()
  },[])
  // End InitView

  const setProduct = () => {
    if(product){
      return (
        <Product 
          id={product.id}
          price={product.price}
          stock={product.stock}
          slides={product.slides}
          description={product.description}
          details={product.details}
          discount={product.discount}
          oficialInformation={product.oficialInformation}
        />
      )
    }else{
      return <></>
    }
  }

  const setProductList = () => {
    if(product){
      return(
        <ProductList 
          listName="Ver más"
          seeAll={`/productos/${product.category.id}`}
          products={products}
        />
      )
    }else{
      return <></>
    }
  }

  const setSubtitle = () => {
    if(product){
      return (
        <Subtitle 
          name={product.name}
        />
      )
    }else{
      return <></>
    }
  }

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
              {setSubtitle()}
            </div>
          </div>
          {setProduct()}
          {setProductList()}
        </div>
      </PublicContainer>
    </div>
  )
}

export default ProductView