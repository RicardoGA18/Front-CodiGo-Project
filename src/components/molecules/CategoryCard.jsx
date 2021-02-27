import React from 'react'
import {Link} from 'react-router-dom'

const CategoryCard = ({name,img,id}) => {
  return (
    <Link to={`/productos/${id}`} className="CategoryCard">
      <img src={img} className="CategoryCard__Img"/>
      <div className="CategoryCard__Name">
        <p className="Title-3-bold">{name}</p>
      </div>
    </Link>
  )
}

export default CategoryCard