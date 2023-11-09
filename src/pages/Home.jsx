import React from 'react'
import './Home.css'

import Header from '../components/Header'
import {useQuery} from '@tanstack/react-query'


import { getAllProducts } from './../services/product';
import ProductCard from '../components/ProductCard';

function Home() {

  const {data,isLoading}= useQuery({queryKey:["products"],queryFn:getAllProducts})
  
   if(isLoading){
    return <div>Loading..........</div>
   }
  return (
   <>
     <div>
      <Header/>
      <div className="page-banner_details">
        <div className="page-banner__details__title">
          <h1>
            Our E-Commerce Website
          </h1>
        </div>
      </div>
      <div className='section'>
          <div className="container">
            <div className="section__head">
              <div className="product__details_title">
                <h2>All Products</h2>
              </div>
            </div>
              {data.length !==0 && (
                <div className="section__content">
                  <div className="grid__three">
                    {data?.map((item)=>(
                      <ProductCard product={item}/>
                    ))}
                  </div>
                </div>
              )}
          </div>
      </div>
     </div>
   </>
  )
}

export default Home