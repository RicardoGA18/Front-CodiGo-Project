import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../../context/App/AppContext'
import {openModalCharge,closeModalCharge} from '../../utils/Alerts'
import Swal from 'sweetalert2'

const CartCard = ({id,name,stock,img,amount,price,discount}) => {
  const {addCartItem,cart} = useContext(AppContext)

  const setDiscount = () => {
    if(discount){
      return (
        <span className="CartCard__Discount">Antes: S/. {price.toFixed(2)}</span>
      )
    }else{
      return <></>
    }
  }

  const deleteProduct = async () => {
    const products = cart.filter(product => product.id === id)
    const productNumber = products.reduce((accumulator,product) => accumulator + product.amount,0)
    const result = await Swal.fire({
      title: '¿Seguro?',
      html: '<span style="color: black">Eliminarás este producto</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    })
    if(result.isConfirmed){
      openModalCharge()
      await addCartItem(id,(productNumber * (-1)))
      closeModalCharge()
    }
  } 

  const manageAmount = async variant => {
    const newStock = amount + variant
    if(newStock > stock){
      Swal.fire({
        title: 'Sin Stock',
        html: `<span style="color: black">Solo tenemos disponible ${amount}</span>`,
        icon: 'warning'
      })
    }else if(newStock <= 0){
      const result = await Swal.fire({
        title: '¿Seguro?',
        html: '<span style="color: black">Eliminarás este producto</span>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, elimínalo',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
      })
      if(result.isConfirmed){
        openModalCharge()
        await addCartItem(id,variant)
        closeModalCharge()
      }
    }else{
      openModalCharge()
      await addCartItem(id,variant)
      closeModalCharge()
    }
  }

  return (
    <div className="CartCard">
      <div className="CartCard__Img">
        <Link to={`/producto/${id}`}>
          <img src={img} alt={name}/>
        </Link>
      </div>
      <div className="CartCard__Contain">
        <p className="CartCard__Price Title-3">
          {`S/. ${(((100 - discount) * price) / 100).toFixed(2)}`}
        </p>
        {setDiscount()}
        <Link to={`/producto/${id}`}>
          <p className="Title-3 CartCard__Name">{name}</p>
        </Link>
        <div className="CartCard__Amount">
          <button className="CartCard__Minus" onClick={()=>{manageAmount(-1)}}><i className="fas fa-minus"></i></button>
          <p> {amount}</p>
          <button className="CartCard__Plus" onClick={()=>{manageAmount(1)}}><i className="fas fa-plus"></i></button>
        </div>
        <p className="CartCard__Delete Paragraph" onClick={()=>{deleteProduct()}}><i className="fas fa-trash-alt"></i> Eliminar</p>
      </div>
    </div>
  )
}

export default CartCard