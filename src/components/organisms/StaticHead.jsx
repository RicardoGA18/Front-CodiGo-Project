import React from 'react'
import StaticInfo from '../molecules/StaticInfo'
import StaticSocial from '../molecules/StaticSocial'

const StaticHead = () => {
  return (
    <div className="StaticHead l-container">
      <div className="l-contain">
        <StaticInfo></StaticInfo>
        <StaticSocial></StaticSocial>
      </div>
    </div>
  )
}

export default StaticHead