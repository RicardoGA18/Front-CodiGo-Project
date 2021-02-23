import React from 'react'

const StaticSocial = () => {
  return (
    <div className="StaticSocial">
      <a 
        href="https://web.whatsapp.com/"
        className="StaticSocial__Item"
        target="_blank"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href="https://www.facebook.com/"
        className="StaticSocial__Item"
        target="_blank"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <a 
        href="https://twitter.com/"
        className="StaticSocial__Item"
        target="_blank"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a 
        href="https://www.instagram.com/"
        className="StaticSocial__Item"
        target="_blank"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  )
}

export default StaticSocial