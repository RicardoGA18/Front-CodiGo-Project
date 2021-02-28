import React from 'react'

const ProductCard = ({name,id,price,img,discount}) => {
    return (
        <div className="ProductCard">
            <img src={img} alt={name}/>
            <p className="Title-3-bold">{name}</p>
            <p className="Title-2-bold">{`S/.${price}`}</p>
            <button className="Button-Primary Title-3-bold">
                Agregar al carrito
            </button>
        </div>
    )
}

export default ProductCard