import React from 'react'
import SubTitle from '../molecules/Subtitle'
import CategoryCard from '../molecules/CategoryCard'

const CategoryBox = ({categories}) => {
  const setCategories = () => {
    return categories.map(category => {
      return (
        <CategoryCard 
          name={category.name}
          img={category.img}
          id={category.id}
          key={category.id}
        />
      )
    })
  }

  return (
    <div className="l-container">
      <div
        className="l-contain"
        style={{ 
          display: 'grid',
          gridGap: '20px'
        }}
      >
        <SubTitle 
          name="CATEGORIAS"
        />
        <div className="l-gridAutoFit">
          {setCategories()}
        </div>
      </div>
    </div>
  )
}

export default CategoryBox