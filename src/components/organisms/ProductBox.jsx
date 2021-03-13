import React from 'react'
import Subtitle from '../molecules/Subtitle'
import ProductCard from '../molecules/ProductCard'

const ProductBox = ({products}) => {
  const setProducts = () => {
    if(products.length){
      const offerProducts = products.filter(product => product.discount > 0)
      const leftProducts = products.filter(product => product.discount == 0)

      const orderProducts = [...offerProducts,...leftProducts]

      return orderProducts.map((product,idx) => {
        return (
          <ProductCard 
            id={product.id}
            key={idx}
            name={product.name}
            img={product.img}
            price={product.price}
            discount={product.discount}
          />
        )
      })
    }else{
      return <></>
    }
  }

  const setSubtitle = () => {
    if(products.length){
      return (
        <Subtitle 
          name={products[0].category.name.toUpperCase()}
        />
      )
    }
    else{
      return <></>
    }
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
        {setSubtitle()}
        <div className="l-gridAutoFit">
          {setProducts()}
        </div>
      </div>
    </div>
  )
}

export default ProductBox