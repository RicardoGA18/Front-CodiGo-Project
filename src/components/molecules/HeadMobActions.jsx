import React from 'react'
import {Link} from 'react-router-dom'
import NavButton from './NavButton'

const HeadMobActions = ({categories,view,user,cart}) => {
  const setUser = () => {
    if(user){
      return (
        <Link to={`/perfil/${user.id}`} className="HeadMobActions__User">
          <div className="HeadMobActions__UserImg">
            {user.img
              ? (<img src={user.img} alt={`Foto de perfil de ${user.name}`}/>)
              : (<p className="Small">{`${user.name[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}</p>)}
          </div>
        </Link>
      )
    }else{
      return (
        <Link to="/inciar-sesion" className="HeadMobActions__User">
          <i className="fas fa-user"></i>
        </Link>
      )
    }
  }

  const setCart = () => {
    if(cart.length){
      return (
        <Link to="/carrito" className="HeadMobActions__Cart">
          <i className="fas fa-shopping-cart"></i>
          <div className="HeadMobActions__CartNumber"><p className="Small">{cart.length}</p></div>
        </Link>
      )
    }
    else{
      return (
        <Link to="/carrito" className="HeadMobActions__Cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      )
    }
  }

  return (
    <div className="HeadMobActions">
      {setUser()}
      {setCart()}
      <NavButton
        categories={categories}
        view={view}
      ></NavButton>
    </div>
  )
}

export default HeadMobActions