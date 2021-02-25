import React from 'react'
import NavMobile from './NavMobile'

const NavButton = ({categories,view}) => {
  return (
    <div className="NavButton">
      <input type="checkbox" className="NBcheck" id="NavCheck"/>
      <div className="NBbars">
        <i className="fas fa-bars"></i>
      </div>
      <div className="NBclose">
        <i className="fas fa-times"></i>
      </div>
      <div className="NBcontainer">
        <NavMobile
          categories={categories}
          view={view}
        ></NavMobile>
      </div>
    </div>
  )
}

export default NavButton