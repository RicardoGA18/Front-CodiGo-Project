import React from 'react'
import Subtitle from '../molecules/Subtitle'
import ProductCard from '../molecules/ProductCard';

const ProductList = ({listName}) => {
    return (
        <div className="Productlist l-container">
            <div className="l-contain">
                <Subtitle 
                    name={listName}
                    seeAll={'/ofertas'}
                />
                <div className="l-gridAutoFit">
                    <ProductCard 
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductList