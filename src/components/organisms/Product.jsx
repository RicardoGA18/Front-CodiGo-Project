import React,{useState,useEffect,useContext} from 'react'
import Slider from '../organisms/Slider'
import AppContext from '../../context/App/AppContext'
// UTILS
import {openModalCharge,closeModalCharge,errorAlert}from '../../utils/Alerts'

const Product = ({id,price,stock,slides,description,details,discount,oficialInformation}) => {
  const [info,setInfo] = useState('description')
  const [amount,setAmount] = useState(1)
  
  const {addCartItem,error,cleanError,cart} = useContext(AppContext)

  const addToCart = async (id,amount) => {
    openModalCharge()
    const products = cart.filter(product => product.id === id)
    const productNumber = products.reduce((accumulator,product) => accumulator + product.amount,0)
    const newAmount = amount -productNumber
    await addCartItem(id,newAmount)
    closeModalCharge()
  }

  useEffect(async () => {
    if(error){
      await errorAlert(error)
      cleanError()
    }
  }, [error])

  useEffect(()=>{
    manageAmount(0)
  },[id])

  const manageAmount = (variant) => {
    if(stock > 0){
      const products = cart.filter(product => product.id === id)
      const productNumber = products.reduce((accumulator,product) => accumulator + product.amount,0)
      const newStock = amount + variant
      if(variant === 0){
        if(productNumber){
          setAmount(productNumber)
        }else{
          setAmount(1)
        }
      }else if(newStock < 0){
        return
      }else if(newStock > stock){
        return
      }else{
        setAmount(newStock)
      }
    }else{
      setAmount('Agotado')
    }
  }

  const setDiscount = () => {
    if(discount){
      return (
        <span className="Small" style={{ position: 'absolute', top: '-12px', left: '0', color: '#EB5757' }}>
          Antes: S/. {price.toFixed(2)}
        </span>
      )
    }else{
      return <></>
    }
  }

  const setClassInfo = (value) => {
    if(value == info){
      return 'Switch__Bar is-active'
    }else{
      return 'Switch__Bar'
    }
  }

  const setDetails = () => {
    return details.map((detail,idx) => {
      return (
        <div className="PF__Item" key={idx}>
          <div className="PF__Key">
            <p className="Paragraph-bold">{detail.key}</p>
          </div>
          <div className="PF__Value">
            <p className="Paragraph">{detail.value}</p>
          </div>
        </div>
      )
    })
  }
  
  useEffect(() => {
    const PD = document.querySelector('[data-product="description"]')
    PD.innerHTML = description
  },[description])

  useEffect(() => {
    const PD = document.querySelector('[data-product="description"]')
    const PF = document.querySelector('[data-product="details"]')
    if(info === 'description'){
      PD.style.display = 'grid'
      PF.style.display = 'none'
    }else{
      PD.style.display = 'none'
      PF.style.display = 'grid'
    }
  },[info])

  return (
    <div className="l-container">
      <div className="Product l-contain">
        <div className="Product__Slider">
          <Slider 
            sliders={slides}
            isProduct={true}
          />
        </div>
        <div className="Product__Info">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridRowGap: '15px' }}>
            <p className="Title-2-bold is-price">{`S/. ${(((100 - discount) * price) / 100).toFixed(2)}`}{setDiscount()}</p>
            <p className="Title-3-bold">Stock: {stock}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridRowGap: '10px' }}>
              <p className="Paragraph">Precio incluye IGV</p>
              <p className="Paragraph">Precio no incluye flete por envío</p>
              <p className="Paragraph">Precio sujeto a cambios</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridRowGap: '20px' }}>
            <a href={oficialInformation} target="_blank" className="Button-Outline Paragraph-bold"><i className="fas fa-info"></i>INFORMACIÓN OFICIAL</a>
            <div style={{ display: 'grid',gridTemplateColumns: '50px 1fr 50px', gridGap: '10px' }}>
              <button className="Button-Small" onClick={()=>{manageAmount(-1)}}><i className="fas fa-minus fa-2x"></i></button>
              <p className="Input Title-3">Cantidad: {amount}</p>
              <button className="Button-Small" onClick={()=>{manageAmount(1)}}><i className="fas fa-plus fa-2x"></i></button>
            </div>
            <button className="Button-Primary Title-3-bold" onClick={() => {addToCart(id,amount)}}>Agregar al carrito</button>
          </div>
        </div>
        <div className="Product__Details">
          <div className="Switch">
            <div className="Switch__Item" onClick={() => {setInfo('description')}}>
              <p className="Title-3-bold">Descripción</p>
              <div className={setClassInfo('description')}></div>
            </div>
            <div className="Switch__Item" onClick={() => {setInfo('details')}}>
              <p className="Title-3-bold">Ficha Técnica</p>
              <div className={setClassInfo('details')}></div>
            </div>
          </div>
          <div className="PD" data-product="description">
            
          </div>
          <div className="PF" data-product="details">
            {setDetails()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product