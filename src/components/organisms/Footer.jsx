import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({categories}) => {
  const setCategories = () => {
    const firstCategories = [...categories].slice(0,4)

    return firstCategories.map(category=>{
      return (
        <Link to={`/productos/${category.id}`} key={category.id}>
          <p className="Footer__Item Paragraph">{category.name}</p>
        </Link>
      )
    })
  }

  return (
    <div className="Footer l-container">
      <div className="l-contain">
        <div className="Footer__List">
          <h3 className="Footer__ListName Title-2-bold">Navegación</h3>
          <Link to="/"><p className="Footer__Item Paragraph">Inicio</p></Link>
          <Link to="/nosotros/quienes-somos"><p className="Footer__Item Paragraph">Nosotros</p></Link>
          <Link to="/productos"><p className="Footer__Item Paragraph">Productos</p></Link>
          <Link to="/contacto"><p className="Footer__Item Paragraph">Contacto</p></Link>
        </div>
        <div className="Footer__List">
          <h3 className="Footer__ListName Title-2-bold">Nosotros</h3>
          <Link to="/nosotros/quienes-somos"><p className="Footer__Item Paragraph">¿Quiénes somos?</p></Link>
          <Link to="/nosotros/nuestras-tiendas"><p className="Footer__Item Paragraph">Nuestras tiendas</p></Link>
          <Link to="/nosotros/nuestras-ventajas"><p className="Footer__Item Paragraph">Nuestras ventajas</p></Link>
          <Link to="/nosotros/como-comprar"><p className="Footer__Item Paragraph">¿Cómo comprar?</p></Link>
          <Link to="/nosotros/preguntas-frecuentes"><p className="Footer__Item Paragraph">Preguntas frecuentes</p></Link>
        </div>
        <div className="Footer__List">
          <h3 className="Footer__ListName Title-2-bold">Productos</h3>
          {setCategories()}
          <Link to="/productos"><p className="Footer__Item Paragraph">Ver todos &#8594;</p></Link>
        </div>
        <div className="Footer__List">
          <h3 className="Footer__ListName Title-2-bold">Contacto</h3>
          <p className="Footer__Item Paragraph">Email: computer@store.com</p>
          <p className="Footer__Item Paragraph">Cel: 999 999 999</p>
          <p className="Footer__Item Paragraph">Tel: 01 444 4444</p>
          <p className="Footer__Item Paragraph">Facebook: Computer Store</p>
          <p className="Footer__Item Paragraph">Twitter: @ComputerStore</p>
        </div>
      </div>
    </div>
  )
}

export default Footer