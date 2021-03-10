import React,{useState,useEffect} from 'react'
import Slider from '../organisms/Slider'

const Product = ({id,price,stock,slides,description,details,discount}) => {
  const [info,setInfo] = useState('description')

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
            <p className="Paragraph-bold">{detail[0]}</p>
          </div>
          <div className="PF__Value">
            <p className="Paragraph">{detail[1]}</p>
          </div>
        </div>
      )
    })
  }
  
  useEffect(() => {
    const PD = document.querySelector('[data-product="description"]')
    PD.innerHTML = description
  },[])

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
            <button className="Button-Outline Paragraph-bold"><i className="fas fa-info"></i>INFORMACIÓN OFICIAL</button>
            <div style={{ display: 'grid',gridTemplateColumns: '50px 1fr 50px', gridGap: '10px' }}>
              <button className="Button-Small"><i className="fas fa-minus fa-2x"></i></button>
              <input className="Input Title-3" type="number" placeholder="Cantidad"/>
              <button className="Button-Small"><i className="fas fa-plus fa-2x"></i></button>
            </div>
            <button className="Button-Primary Title-3-bold">Agregar al carrito</button>
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