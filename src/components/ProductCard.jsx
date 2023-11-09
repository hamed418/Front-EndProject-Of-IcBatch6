import React from 'react'
import './ProductCard.css'
import {useNavigate} from 'react-router-dom'

function ProductCard({product}) {
    const navigate = useNavigate();
  return (
//    <div className="master__Mingredient">
//      <div className='Mingredient'>
  <div onClick={()=>navigate(`/products/${product.id}`)} className='ingredient'>
        <div className='ingredient__image'>
            <figure>
                <img src={product.photo} alt={product.name}/>
            </figure>
        </div>
        <div className="ingredient__title">
            <h3>{product.name}</h3>
        </div><br/>
        <div className="ingredient__content">
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
        <div className="ingredient__btn">
            <button className='btn-white'>
                ADD TO CART
            </button>
        </div>
    </div>
//     </div>
//    </div>
  )
}

export default ProductCard