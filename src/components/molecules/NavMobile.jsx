import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const NavMobile = ({categories,view}) => {
  const setClassView = (itemView) => {
    if(itemView === view){
      return 'is-active'
    }
  }

  const setCategories = () => {
    return categories.map(category => {
      return (
        <Link className="DropBox__Item" to={`/productos/${category.id}`} key={category.id}>
            <p className="Paragraph">{category.name}</p>
        </Link>
      )
    })
  }

  useEffect(() => {
    const checkButtons = Array.from(document.querySelectorAll('.DropButton input[type="checkbox"]'))
    checkButtons.forEach(checkButton => {
      checkButton.addEventListener('click',(e) => {
        const DropBox = e.target.parentElement.parentElement.nextElementSibling
        const children = parseInt(DropBox.dataset.children)
        if(e.target.checked){
          DropBox.style.maxHeight = `${children * 41}px`
        }else{
          DropBox.style.maxHeight = '0px'
        }
      })
    })
  },[])

  return (
    <div className="NavMobile">
      <div className="NavMobile__Social">
        <a target="_blank" href="https://web.whatsapp.com/"><i className="fab fa-whatsapp fa-2x"></i></a>
        <a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-2x"></i></a>
        <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-2x"></i></a>
        <a target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-2x"></i></a>
      </div>
      <div className="NavMobile__List">
        <Link to="/" className={`NavMobile__Item ${setClassView('home')}`}>
          <p className="Title-2">Inicio</p>
        </Link>
        <div className={`NavMobile__Item is-grid ${setClassView('about')}`}>
          <Link to="/nosotros/quienes-somos" className="NBItemName">
            <p className="Title-2">Nosotros</p>
          </Link>
          <div className="DropButton">
            <input type="checkbox"/>
            <i className="fas fa-angle-down fa-2x"></i>
          </div>
        </div>
        <div className="DropBox" data-children="5">
          <Link className="DropBox__Item" to="/nosotros/quienes-somos">
            <p className="Paragraph">¿Quiénes somos?</p>
          </Link>
          <Link className="DropBox__Item" to="/nosotros/nuestras-tiendas">
            <p className="Paragraph">Nuestras tiendas</p>
          </Link>
          <Link className="DropBox__Item" to="/nosotros/nuestras-ventajas">
            <p className="Paragraph">Nuestras ventajas</p>
          </Link>
          <Link className="DropBox__Item" to="/nosotros/como-comprar">
            <p className="Paragraph">¿Cómo comprar?</p>
          </Link>
          <Link className="DropBox__Item" to="/nosotros/preguntas-frecuentes">
            <p className="Paragraph">Preguntas frecuentes</p>
          </Link>
        </div>
        <div className={`NavMobile__Item is-grid ${setClassView('products')}`}>
          <Link to="/productos" className="NBItemName">
            <p className="Title-2">Productos</p>
          </Link>
          <div className="DropButton">
            <input type="checkbox"/>
            <i className="fas fa-angle-down fa-2x"></i>
          </div>
        </div>
        <div className="DropBox" data-children={categories.length}>
          {setCategories()}
        </div>
        <Link to="/contact" className={`NavMobile__Item ${setClassView('contact')}`}>
          <p className="Title-2">Contacto</p>
        </Link>
      </div>
    </div>
  )
}

export default NavMobile