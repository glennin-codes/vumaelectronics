import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import formatPriceWithCommas from '../ProductDetails/HelperPrice';
import { urlFor } from '../../lib/client';
import Image from 'mui-image';
// import { NavLink } from 'react-router-dom';

const Product = (curElem) => {


  const {slug,name,image,price,category} = curElem;
 
  const firstImage = image && image[0];
  const source = firstImage ? firstImage.asset : null;

  const imageUrl = source ? urlFor(source).url() : "";
 
    return (
 <Link to={`/product/details/${slug?.current}`}>
    <div className="card">
      <figure>
        <img
         src={imageUrl}
         alt={name}
         className='Image'
          /> 
      </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data--price"> Ksh{formatPriceWithCommas(price)}</p>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Product