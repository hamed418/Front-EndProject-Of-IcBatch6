import React from 'react'
import './ProductDetails.css'
import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query' 
import { getProductById } from '../services/product'
import Header from '../components/Header'
function ProductDetails() {
  const {id} = useParams()
  const {data} = useQuery({queryKey:[`products/${id}`,id],queryFn:()=>getProductById(id)})
  return (
    <div>
       <Header/>
       {data !== null && (
        <div className='details-box_d-flex'>
         <div className="image-section">
           <img src={data?.photo} alt={data?.name} className="details-box__image" />
          </div>  
          <div className="details-section">
            <h2 className="details-section__Product-title">
              Product Title: {data?.name}
            </h2><br/><br/>
            <h4 className="details-section__product-description">
              Details About the Product: {data?.description}
            </h4><br/><br/>
            <h4 className="details-section__products-title">
              The Price Of the product is: {data?.price}
            </h4><br/>
            <div className="ingredient__btn">
              <button className="btn-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
       )}
    </div>
  )
}

export default ProductDetails