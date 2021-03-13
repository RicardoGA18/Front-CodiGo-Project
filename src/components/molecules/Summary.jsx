import React from 'react'
import { Link } from 'react-router-dom'

const Summary = ({cart,view}) => {
  const setSubTotal = () => {
    let subTotal = 0
    cart.forEach(product=>{
      const price = product.price
      const discount = product.discount
      const reallyPrice = ((100 - discount) * price) / 100
      const totalPrice = reallyPrice * product.amount
      subTotal = subTotal + totalPrice
    })
    return subTotal.toFixed(2)
  }

  const setProducts = () => {
    return cart.map(product => {
      return (
        <div className="Summary__Item" key={product.id}>
          <p className="Small">{product.amount} X</p>
          <p className="Small">{product.name}</p>
          <p className="Small">S/. {((((100 - product.discount) * product.price) / 100) * product.amount).toFixed(2)}</p>
        </div>
      )
    })
  }

  const setButton = () => {
    if(view == 'carrito'){
      return (
        <Link to="/pasarela-de-pago">
          <button className="Button-Primary Title-3-bold">Continuar</button>
        </Link>
      )
    }else{
      return <></>
    }
  }

  return (
    <div className="Summary">
      <div className="Summary__Content">
        <div className="Summary__Contain">
          <p className="Summary__Title">
            <span className="Title-2">Subtotal</span>
            <span className="Title-2">S/. {setSubTotal()}</span>
          </p>
          {setProducts()}
          {setButton()}
        </div>
      </div>
    </div>
  )
}

export default Summary