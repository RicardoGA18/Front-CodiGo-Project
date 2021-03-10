import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({categories,view}) => {
  const setClass = (actualView) => {
    if(actualView == view){
      return 'Nav__Item is-active'
    }else{
      return 'Nav__Item'
    }
  }

  const setCategories = () => {
    return categories.map((category) => {
      return (
        <Link
          key={category.id}
          className="DropBox__Item"
          to={`/productos/${category.id}`}
        >
          <p className="Small">{category.name}</p>
        </Link>
      )
    })
  }

  return (
    <div className="Nav">
      <Link to="/" className="Nav__Logo">
        <img src='https://firebasestorage.googleapis.com/v0/b/computer-store-a1f8e.appspot.com/o/assets%2Flogo.png?alt=media&token=9c70f14d-9f5f-437e-9f6f-8efaaf66c892' alt="Logo Computer Store"/>
      </Link>
      <Link to="/" className={setClass('home')}>
        <p className="Title-4">INICIO</p>
      </Link>
      <div className={setClass('about')} style={{ padding: '0' }}>
        <Link to="/nosotros/quienes-somos" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 15px' }}>
          <p className="Title-4">NOSOTROS</p>
        </Link>
        <div className="DropBox">
          <Link
            className="DropBox__Item"
            to="/nosotros/quienes-somos"
          >
            <p className="Small">¿Quiénes somos?</p>
          </Link>
          <Link
            className="DropBox__Item"
            to="/nosotros/nuestras-tiendas"
          >
            <p className="Small">Nuestras tiendas</p>
          </Link>
          <Link
            className="DropBox__Item"
            to="/nosotros/nuestras-ventajas"
          >
            <p className="Small">Nuestras ventajas</p>
          </Link>
          <Link
            className="DropBox__Item"
            to="/nosotros/como-comprar"
          >
            <p className="Small">¿Cómo comprar?</p>
          </Link>
          <Link
            className="DropBox__Item"
            to="/nosotros/preguntas-frecuentes"
          >
            <p className="Small">Preguntas frecuentes</p>
          </Link>
        </div>
      </div>
      <div className={setClass('products')} style={{ padding: '0' }}>
        <Link to="/productos" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'0 15px' }}>
          <p className="Title-4">PRODUCTOS</p>
        </Link>
        <div className="DropBox">
          {setCategories()}
        </div>
      </div>
      <Link to="/contacto" className={setClass('contact')}>
        <p className="Title-4">CONTACTO</p>
      </Link>
    </div>
  )
}

export default Nav