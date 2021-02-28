import React from 'react'
import Subtitle from '../molecules/Subtitle'
import ProductCard from '../molecules/ProductCard';

const ProductList = ({listName,seeAll,products}) => {
    const setProducts = () => {
        const firstProducts = [...products].splice(0,4)
        
        return firstProducts.map((product,idx) => {
            return (
                <ProductCard 
                    key={idx}
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                />
            )
        })
    }

    return (
        <div className="Productlist l-container">
            <div className="l-contain">
                <Subtitle 
                    name={listName}
                    seeAll={seeAll}
                />
                <div className="l-gridAutoFit">
                    {setProducts()}
                </div>
            </div>
        </div>
    )
}

export default ProductList