import React,{useEffect} from  'react'
import {useContext} from'react'

//Context
import AppContext from '../context/App/AppContext'

// Components
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'
import SubTitle from '../components/molecules/Subtitle'
import CartCard from '../components/molecules/CartCard'
import Summary from '../components/molecules/Summary'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts'

const CartView = () => {
  // State
  const {categories,user,cart} = useContext(AppContext)

  //Actions
  const {getCategories} = useContext(AppContext)

  // InitView
  const initView = async () =>{
    openModalCharge()
    await getCategories()
    closeModalCharge()
  }

  useEffect(() => {
    window.scroll(0,0)
    initView()
  },[])
  //End InitView

  const setCards = () => {
    if(cart.length){
      return cart.map(product => {
        return (
          <CartCard 
            key={product.id}
            id={product.id}
            name={product.name}
            stock={product.stock}
            img={product.img}
            amount={product.amount}
            price={product.price}
            discount={product.discount}
          />
        )
      })
    }
    else{
      return <p className="Title-3">No se encontraron productos.</p>
    }
  }

  return (
    <div className="CartView">
      <StaticHead />
      <Head 
        view="carrito"
        categories={categories}
        user={user}
        cart={cart}
      />
      <div className="l-container">
        <div className="l-contain CartView__Content">
          <SubTitle 
            name="Carrito de Compras"
          />
          <div className="CartBox">
            <div className="CartBox__Content">
              {setCards()}
            </div>
          </div>
          <Summary 
            cart={cart}
            view={'carrito'}
          />
        </div>
      </div>
    </div>
  )
}

export default CartView