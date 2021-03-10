import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import setIconMq from '../../utils/setIconMq'
import { v4 as uuidv4 } from 'uuid'

const Subtitle = ({seeAll,name}) => {
  const iconSeeAllId = uuidv4()

  useEffect(() => {
    const iconSeeAll = document.querySelector(`[data-icon="${iconSeeAllId}"]`)
    if(iconSeeAll){
      setIconMq(
        iconSeeAll,
        'fas fa-angle-right',
        'fas fa-angle-right fa-2x',
        'fas fa-angle-right fa-2x',
      )
    }
  }, [])

  const setSeeAll = () => {
    if(seeAll){
      return (
        <Link to={seeAll} className="Subtitle__SeeAll">
          <p className="Title-4-bold">Ver todos</p>
          <i className="fas fa-angle-right" data-icon={iconSeeAllId}></i>
        </Link>
      )
    }
  }

  return (
    <div className="Subtitle">
      <div className="Subtitle__Name">
        <div className="STbar"></div>
        <h2 className="Title-3-bold">{name}</h2>
      </div>
      {setSeeAll()}
    </div>
  )
}

export default Subtitle