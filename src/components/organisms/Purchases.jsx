import React, {useEffect , useContext} from 'react'
import AppContext from '../../context/App/AppContext'
import formatDate from '../../context/services/formatDate'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { openModalCharge , closeModalCharge } from '../../utils/Alerts' 

const Purchases = () => {
  const { purchases , getPurchases , user } = useContext(AppContext)
  const ReactSwal = withReactContent(Swal)
  
  useEffect(async () => {
    openModalCharge()
    await getPurchases(user.id)
    closeModalCharge()
  },[])

  const setProductList = (products) => {
    return products.map(product => (
      <React.Fragment key={product._id}>
        <div className="ProductsTable__Item">
          <p className="Paragraph" style={{ textAlign: 'left' }}>{product.name}</p>
        </div>
        <div className="ProductsTable__Item">
          <p className="Paragraph">{product.amount}</p>
        </div>
        <div className="ProductsTable__Item">
          <p className="Paragraph">S/. {product.price}</p>
        </div>
      </React.Fragment>
    ))
  }

  const handleSeePurchase = (id,fecha,total,prods) => {
    ReactSwal.fire({
      title: <p style={{ textAlign: 'left' , color: 'black' }}>Compra {id}</p>,
      customClass:{
        popup: 'ModalSwal',
      },
      confirmButtonText: 'Volver',
      html: (
        <div className="ModalPurchase">
          <p className="Title-3" style={{ textAlign: 'left' }}>Realizado el {formatDate(fecha)}</p>
          <p className="Title-3" style={{ marginTop: 10, textAlign: 'left' }}>Monto total: S/. {total}</p>
          <p className="Title-2-bold" style={{ marginTop: 10 , marginBottom: 10, textAlign: 'left' }}>Productos</p>
          <div className="ProductsTable">
            <div className="ProductsTable__Content">
              <div className="ProductsTable__HeadItem">
                <p className="Title-4-bold" style={{ textAlign: 'left' }}>Nombre</p>
              </div>
              <div className="ProductsTable__HeadItem">
                <p className="Title-4-bold">Cantidad</p>
              </div>
              <div className="ProductsTable__HeadItem">
                <p className="Title-4-bold">P. Unitario</p>
              </div>
              {setProductList(prods)}
            </div>
          </div>
        </div>
      )
    })
  }

  const setPurchases = () => {
    if(purchases && purchases.length){
      return purchases.map(purchase => (
        <React.Fragment key={purchase._id}>
          <div className="Purchases__Item">
            <p className="Title-4">{purchase.mercadoPagoId}</p>
          </div>
          <div className="Purchases__Item">
            <p className="Title-4">{formatDate(purchase.createdAt)}</p>
          </div>
          <div className="Purchases__Item">
            <p className="Title-4">{purchase.totalAmount}</p>
          </div>
          <div className="Purchases__Item">
            <button className="Title-3 Button-Outline Icon" onClick={() => {handleSeePurchase(purchase.mercadoPagoId,purchase.createdAt,purchase.totalAmount,purchase.products)}}>
              <i className="fas fa-eye"></i>
            </button>
          </div>
        </React.Fragment>
      ))
    }else{
      return <p className="Paragraph empty-text">Aún no haz realizado tu primera compra</p>
    }
  }

  return (
    <div className="Profile">
      <div className="Profile__Content">
        <p className="Title-3-bold Profile__Title" style={{ textAlign: 'left' }}>Historial de Pedidos</p>
        <div className="Purchases">
          <div className="Purchases__Content">
            <div className="Purchases__ItemHead">
              <p className="Title-4-bold">ID</p>
            </div>
            <div className="Purchases__ItemHead">
              <p className="Title-4-bold">Fecha</p>
            </div>
            <div className="Purchases__ItemHead">
              <p className="Title-4-bold">Monto total (S/.)</p>
            </div>
            <div className="Purchases__ItemHead empty"></div>
            {setPurchases()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchases
