import React from 'react'
import {useHistory} from 'react-router-dom'

const ProductCard = ({name,id,price,img,discount}) => {
    const history = useHistory()

    const setDiscountText = () => {
        if(discount){
            return (
                <span className="Small" style={{ position: 'absolute', top: '-11px', left: '0', color: '#EB5757', width: '100%',textAlign:'center' }}>
                    Antes: S/. {price.toFixed(2)}
                </span>
            )
        }else{
            return <></>
        }
    }

    const setDiscount = () => {
        if(discount){
            return (
                <div className="ProductCard__Discount">
                    <p className="Title-3-bold">{`-${discount}%`}</p>
                </div>
            )
        }else{
            return <></>
        }
    }

    return (
        <div className="ProductCard" onClick={(e) => {
            if(e.target.className === "Button-Primary Title-3-bold"){
                // console.log('Producto Agregado!!')
            }else{
                history.push(`/producto/${id}`)
            }
        }}>
            <img src={img} alt={name}/>
            <p className="Title-3-bold">{name}</p>
            <p className="Title-2-bold">{`S/. ${(((100 - discount) * price) / 100).toFixed(2)}`}{setDiscountText()}</p>
            <button className="Button-Primary Title-3-bold">
                Agregar al carrito
            </button>
            {setDiscount()}
        </div>
    )
}

export default ProductCard