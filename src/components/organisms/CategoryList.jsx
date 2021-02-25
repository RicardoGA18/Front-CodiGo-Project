import React from 'react'
import Subtitle from '../molecules/Subtitle'

const CategoryList = () => {
  return (
    <div className="CategoryList l-container">
      <div className="l-contain">
        <Subtitle seeAll={'/productos'} name="CATEGORIAS"></Subtitle>
        <div className="l-gridAutoFit">
          <div className="CategoryCard"></div>
          <div className="CategoryCard"></div>
          <div className="CategoryCard"></div>
          <div className="CategoryCard"></div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList