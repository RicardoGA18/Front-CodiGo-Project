import React from 'react'
import Subtitle from '../molecules/Subtitle'
import CategoryCard from '../molecules/CategoryCard'

const CategoryList = ({categories}) => {
  const setCards = () => {
    const firstCategories = [...categories].splice(0,4)

    return firstCategories.map(category => {
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
    <div className="CategoryList l-container">
      <div className="l-contain">
        <Subtitle seeAll={'/productos'} name="CATEGORIAS"></Subtitle>
        <div className="l-gridAutoFit">
          {setCards()}
        </div>
      </div>
    </div>
  )
}

export default CategoryList