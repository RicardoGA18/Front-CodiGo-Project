import React from 'react'
import {Link} from 'react-router-dom'

const HeadActions = ({user,cart}) => {
  const setCartNumber = () => {
    if(!cart.length){
      return (<></>)
    }else{
      return (<div className="HeadActions__CartNumber"><p className="Small">{cart.length}</p></div>)
    }
  }

  const setUser = () => {
    if(user){
      return(
        <Link to={`/perfil/${user._id}`} className="HeadActions__User">
          <div className="HeadActions__UserImg">
            { user.img 
              ? (<img src={user.img} alt={`Foto de perfil de ${user.name}`}/>)
              : (<p className="Small">{`${user.name[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}</p>) }
          </div>
          <p className="Small">{user.username}</p>
        </Link>
      )
    }else{
      return(
        <Link to='/iniciar-sesion' className="HeadActions__User">
          <i className="fas fa-user"></i>
          <p className="Small">Mi cuenta</p>
        </Link>
      )
    }
  }

  return (
    <div className="HeadActions">
      {setUser()}
      <Link to="/carrito" className="HeadActions__Cart">
        <i className="fas fa-shopping-cart"></i>
        {setCartNumber()}
      </Link>
    </div>
  )
}

export default HeadActions