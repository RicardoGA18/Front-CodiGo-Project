import React from 'react'
import ButtonMap from '../atoms/ButtonMap'

const StaticInfo = () => {
  return (
    <div className="StaticInfo">
      <div className="StaticInfo__Item">
        <ButtonMap></ButtonMap>
      </div>
      <div className="StaticInfo__Item">
        <i className="fas fa-envelope"></i>
        <p className="Small">COMPUTER@STORE.COM</p>
      </div>
      <div className="StaticInfo__Item">
        <i className="fas fa-mobile-alt"></i>
        <p className="Small">999 999 999</p>
      </div>
      <div className="StaticInfo__Item">
        <i className="fas fa-phone-alt"></i>
        <p className="Small">01 444 4444</p>
      </div>
    </div>
  )
}

export default StaticInfo