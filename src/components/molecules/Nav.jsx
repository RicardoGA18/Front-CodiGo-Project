import React from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Nav = ({categories}) => {
  const setCategories = () => {
    return categories.map((category) => {
      return (
        <Link
          key={category._id}
          className="DropBox__Item"
          to={`/productos/${category._id}`}
        >
          <p className="Small">{category.name}</p>
        </Link>
      )
    })
  }

  return (
    <div className="Nav">
      <Link to="/" className="Nav__Logo">
        <img src={logo} alt="Logo Computer Store"/>
      </Link>
      <div className="Nav__Item">
        <p className="Title-4">INICIO</p>
      </div>
      <div className="Nav__Item">
        <p className="Title-4">NOSOTROS</p>
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
      <div className="Nav__Item">
        <Link to="/productos">
          <p className="Title-4">PRODUCTOS</p>
        </Link>
        <div className="DropBox">
          {setCategories()}
        </div>
      </div>
      <div className="Nav__Item">
        <p className="Title-4">CONTACTO</p>
      </div>
    </div>
  )
}

export default Nav