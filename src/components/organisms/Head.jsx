import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../molecules/Nav'
import HeadActions from '../molecules/HeadActions'
import HeadMobActions from '../molecules/HeadMobActions'
import setHeadObserver from '../../utils/setHeadObserver'
import setNavBg from '../../utils/setNavBg'

const Head = ({view,categories,user,cart}) => {
  useEffect(() => {
    setHeadObserver()
    setNavBg()
  },[])

  return (
    <Fragment>
      <div className="Head l-container" id="DesktopHead">
        <div className="l-contain">
          <Nav
            categories={categories}
            view={view}
          ></Nav>
          <HeadActions
            user={user}
            cart={cart}
          ></HeadActions>
        </div>
      </div>
      <div className="HeadMobile l-container">
        <div className="l-contain">
          <Link to="/" className="HeadMobile__Logo">
            <img src='https://firebasestorage.googleapis.com/v0/b/computer-store-a1f8e.appspot.com/o/assets%2Flogo.png?alt=media&token=9c70f14d-9f5f-437e-9f6f-8efaaf66c892' alt="Computer Store Logo"/>
          </Link>
          <HeadMobActions
            categories={categories}
            view={view}
            user={user}
            cart={cart}
          ></HeadMobActions>
        </div>
      </div>
      <div id="BgMobNav">
        
      </div>
    </Fragment>
  )
}

export default Head