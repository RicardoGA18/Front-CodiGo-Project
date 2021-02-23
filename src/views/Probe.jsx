import React from 'react'
import ButtonMap from '../components/atoms/ButtonMap'

const Probe = () => {
  return (
    <div>
      <h1>Probe</h1>
      <div
      style={{ 
        width: '400px',
        height: '400px',
        backgroundColor: 'black',
        display: 'grid',
        gridGap: '10px',
      }}>
        <button className="Button-Primary Title-3-bold">
          <i className="fab fa-facebook-f"></i>
          Facebook
        </button>
        <button className="Button-Outline Title-3-bold">
          <i className="fab fa-facebook-f"></i>
          Secondary
        </button>
        <button className="Button-Small Title-1-bold">S</button>
        <input type="text" className="Input Title-3" placeholder="Input" required />
        <div>
          <ButtonMap></ButtonMap>
        </div>
      </div>
      <h2>Hola Alain y Randolph</h2>
    </div>
  )
}

export default Probe